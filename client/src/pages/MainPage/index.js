import * as React from 'react';
import {useStyles} from "./style";
import Header from "../../components/header/header";
// import Footer from "../../components/footer/footer";
import MessageDisplay from "../../components/messagedisplay/messageDisplay";

const MainPage = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.App} {...props} >
            <Header />
            <MessageDisplay />
            {/*<Footer />*/}
        </div>
    );
}

export default MainPage;