import React from 'react';
import {useStyles} from "./style";
import PropTypes from "prop-types";

const ImagePost = (props) => {
    const classes = useStyles();
    const { image, messageBody } = props.message;
    return (
        <div className={classes.ImagePost} {...props}>
            <img 
                src={image}
                className={classes.Image}
                alt={'test'}
                role="image"
            />
            <p role="message-text" className={classes.Text}>
                {messageBody}
            </p>
        </div>
    );
};

ImagePost.propTypes = {
    message: {
        image: PropTypes.string,
        messageBody: PropTypes.string
    }
}

export default ImagePost;