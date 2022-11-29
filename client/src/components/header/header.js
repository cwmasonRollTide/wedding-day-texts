import React from 'react';
import { useStyles } from "./style";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const navItems = ['Messages', 'About', 'Contact'];

const MasonWeddingHeader = (props) => {
    const classes = useStyles();
    return (
        <header role="header" className={classes.MasonWeddingHeader} {...props}>
            <Box style={{display: 'flex'}}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        style={{'flexGrow': 1}}
                    >
                        Wedding Day Texts
                    </Typography>
                    <Box>
                        {navItems.map((item) => (
                            <Button key={item} sx={{color: '#fff'}}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Box>
        </header>
    );
};

export default MasonWeddingHeader;