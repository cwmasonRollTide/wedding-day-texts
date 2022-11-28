import {useStyles} from "./styles";
import PropTypes from "prop-types";

const TextPost = (message) => {
    const classes = useStyles();
    return (
        <div className={classes.Text}>
            {message}
        </div>
    );
};

TextPost.PropTypes = {
    message: PropTypes.string
};

export default TextPost;
