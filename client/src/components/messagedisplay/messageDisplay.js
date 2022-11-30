import React from 'react';
import { useStyles } from "./style";
import PropTypes from "prop-types";

export const MessageDisplay = (messages, props) => {
    const classes = useStyles();
    return (
        <body {...props}>
            <div id="images" className={classes.container}>
                <div className="row">
                    {messages?.map((data, index) => {
                        const { messageBody, image } = data
                        return (
                            <div key={index} className={classes.card}>
                                <div className={classes.cardImage}>
                                    <img
                                        alt={messageBody}
                                        className={classes.cardImageTop}
                                        src={image}
                                    />
                                </div>
                                <div className={classes.cardText}>
                                    <p>{messageBody}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </body>
    );
}

MessageDisplay.PropTypes = {
    messages: PropTypes.array
};

export default MessageDisplay;