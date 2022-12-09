import { useStyles } from "./style";
import PropTypes from "prop-types";
import TextPost from "../textpost/textpost";
import ImagePost from "../imagepost/imagepost";
import React, {useEffect, useState} from 'react';
import S3ClientImplementation from "../../api/s3client";

export const MessageDisplay = () => {
    const classes = useStyles();
    const [messages, setMessages] = useState([]);
    const s3Bucket = new S3ClientImplementation("us-east-2");

    useEffect(() => {
        try {
            s3Bucket.getMessages()
                .then(messages => {
                    console.log('MESSAGES in BUCKET');
                    setMessages(messages);
                })
                .catch(err => {
                    console.log(err);
                });    
        } catch (err) {
            console.log(err);
        }
    }, []);
    
    //TODO: add topic for message safe notification to also push to with new message payloads coming in,
    //so the only time we call the s3 bucket that holds the safe messages is on first render

    // <summary>
    // For now, we are just handling SMS and MMS, so if the numMedia field is greater than zero, it is an image message 
    // </summary
    const renderMessage = (data) => {
      if (data?.numMedia > 0 && data?.image) 
          return <ImagePost message={data} />;
      return <TextPost message={data?.messageBody} />;
    };
    
    return (
        <div>
            <div data-testid="messagecontainer" id="images" className={classes.container}>
                {messages?.map((data, index) =>
                    <div key={index} className={classes.messageEntry} data-testid="message-entry">
                        { renderMessage(data) }
                    </div>
                )}
            </div>    
        </div>
    );
}

MessageDisplay.propTypes = {
    messages: PropTypes.array
};

export default MessageDisplay;