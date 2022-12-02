import React from 'react';
import {useStyles} from "./style";

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

export default ImagePost;