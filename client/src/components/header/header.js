import React from 'react';
import { useStyles } from "./style";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from "../../images/header-logo.png";

const MasonWeddingHeader = (props) => {
    const classes = useStyles();
    return (
        <header role="header" className={classes.MasonWeddingHeader} {...props}>
            <Box style={{display: 'flex'}}>
                <Toolbar>
                    <img 
                        src={logo} 
                        alt={'logo'}
                        className={classes.logo}
                    />
                </Toolbar>
            </Box>
        </header>
    );
};

export default MasonWeddingHeader;

// My Head

// My head's so filled with
// Thoughts of you, so soon, my wife,
// You are my whole life

// Your face lit up each evening
// Strolling between Smith and Lloyd
// Your smile caught my eye

// You are my favorite
// Person to study next to
// Let's get more degrees

// Let's fill our heads up
// With knowledge and dreams alike
// See where those cards fall

