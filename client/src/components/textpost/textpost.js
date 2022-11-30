import * as _ from "lodash";
import {useStyles} from "./styles";
import PropTypes from "prop-types";

const TextPost = ({message}) => {
    const classes = useStyles();
    return !_.isNullOrUndefined(message) && (
        <div role="text-post" className={classes.Text}>
            {message}
        </div>
    );
};

TextPost.propTypes = {
    message: PropTypes.string
};

export default TextPost;
