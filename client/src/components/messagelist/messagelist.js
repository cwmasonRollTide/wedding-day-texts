import React from 'react';
import { useStyles } from "./style";
import PropTypes from "prop-types";

export const MessageList = (messages, props) => {
    const classes = useStyles();
    return (
        <body {...props}>
            <div id="images" className={classes.container}>
                <div className="row">
                    {messages?.map((data, index) => {
                        const { messageText, download_url } = data
                        return (
                            <div key={index} className={classes.card}>
                                <div className={classes.cardImage}>
                                    <img
                                        alt={messageText}
                                        className={classes.cardImageTop}
                                        src={download_url}
                                    />
                                </div>
                                <div className={classes.cardText}>
                                    <p>{messageText}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </body>
    );
}

MessageList.PropTypes = {
    messages: PropTypes.array
};

export default MessageList;