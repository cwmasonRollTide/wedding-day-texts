import React, {useEffect, useState} from 'react';
import { useStyles } from "./style";
import PropTypes from "prop-types";
import TextPost from "../textpost/textpost";
import ImagePost from "../imagepost/imagepost";
import {S3Client} from "@aws-sdk/client-s3";
import StorageClient from "../../api/storageclient";

export const MessageDisplay = () => {
    const classes = useStyles();
    const [messages, setMessages] = useState([]);
    const s3Bucket = new S3Client({region: "us-east-2" });
    const storageClient = new StorageClient(s3Bucket);

    useEffect(async () => {
        try {
            const messages = await storageClient.getMessages();
            setMessages(messages);
        } catch (err) {
            console.log("BLASH AL:OQIJKFN");
            console.log(err);
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