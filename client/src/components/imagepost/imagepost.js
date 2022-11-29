import React from 'react';
import {useStyles} from "./style";

const ImagePost = (props) => {
    const classes = useStyles();
    const { image, messageText } = props.message;
    return (
        <div className={classes.ImagePost} {...props}>
            <img 
                src={image}
                className={classes.Image}
                alt={'test'}
                role="image"
            />
            <p role="message-text" className={classes.Text}>
                {messageText}
            </p>
        </div>
    );
};

export default ImagePost;