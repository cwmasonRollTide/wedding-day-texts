import React from 'react';
import { useStyles } from "./style";
import PropTypes from "prop-types";
import TextPost from "../textpost/textpost";
import ImagePost from "../imagepost/imagepost";
import {useEffect, useState} from "@types/react";
import {S3Client} from "@aws-sdk/client-s3";

export const MessageDisplay = () => {
    const classes = useStyles();
    const [messages, setMessages] = useState([]);
    const s3Bucket = new S3Client(process?.env?.AWS_REGION ?? "us-east-1");

    useEffect(async () => {
        try {
            const messages = await s3Bucket.getMessages();
            setMessages(messages);
        } catch (err) {
            console.log("BLASH AL:OQIJKFN");
        }
    }, [])

    // <summary>
    // For now, we are just handling SMS and MMS, so if the numMedia field is greater than zero, it is an image message 
    // </summary
    const renderMessage = (data) => {
      if (data?.numMedia > 0) 
          return <ImagePost message={data} />;
      return <TextPost message={data?.messageBody} />;
    };
    return (
        <div data-testid="messagecontainer" id="images" className={classes.container}>
            <h1>WEDDING DAY TEXTS</h1>
            <div className="row">
                {messages?.map((data, index) => {
                    renderMessage(data);
                })}
            </div>
        </div>
    );
}

MessageDisplay.propTypes = {
    messages: PropTypes.array
};

export default MessageDisplay;