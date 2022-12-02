import React from 'react';
import { useStyles } from "./style";
import PropTypes from "prop-types";
import TextPost from "../textpost/textpost";
import ImagePost from "../imagepost/imagepost";

export const MessageDisplay = (props) => {
    const classes = useStyles();
    const { messages } = props;

    // <summary>
    // For now, we are just handling SMS and MMS, so if the numMedia field is greater than zero, it is an image message 
    // </summary
    const renderMessage = (data) => {
      if (data?.numMedia > 0) 
          return <ImagePost message={data} />;
      return <TextPost message={data?.messageBody} />;
    };
    return (
        <div {...props} data-testid="messagecontainer" id="images" className={classes.container}>
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