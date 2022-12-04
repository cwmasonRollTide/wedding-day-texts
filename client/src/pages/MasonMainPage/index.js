import * as React from 'react';
import {useStyles} from "./style";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import MessageDisplay from "../../components/messagedisplay/messageDisplay";

const MasonMainPage = (props) => {
    const classes = useStyles();
    return (
        <div role="App" className={classes.App} {...props} >
            <Header />
            <MessageDisplay />
            <Footer />
        </div>
    );
}

export default MasonMainPage;