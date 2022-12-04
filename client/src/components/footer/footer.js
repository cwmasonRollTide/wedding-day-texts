import React from 'react';
import {useStyles} from "./style";
import logo from "../../images/footer-logo.png";

const MasonDayFooter = (props) => {
    const classes = useStyles();
    return (
        <footer role="footer" className={classes.MasonDayFooter} {...props}>
            <img
                src={logo}
                alt={'logo'}
                className={classes.logo}
            />
        </footer>
    );
};

export default MasonDayFooter;

// My Feet
//
// I run to you now
// And will run to you till death
// Until I must crawl

// As I move your way
// To prove our love still transcends
// Even Heaven's gates

// Never get enough
// Your voice always elates me
// Feet, stay put for now
