import React from 'react';
import {useStyles} from "./style";
import {PropTypes} from "@mui/material";

const ImagePost = (message, props) => {
    const classes = useStyles();
    const { image, messageText } = message;
    return (
        <div className={classes.ImagePost} {...props}>
            <img 
                src={image}
                className={classes.Image}
                alt={'test'}
            />
            <body className={classes.Text}>
                {messageText}
            </body>
        </div>
    );
};

ImagePost.PropTypes = {
    message: PropTypes.objectOf({
      "image": PropTypes.string,
      "messageText": PropTypes.string
    })
};

export default ImagePost;