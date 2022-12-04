import React from 'react';
import {useStyles} from "./style";
import {Link, List, ListItem} from "@mui/material";

const MasonDayFooter = (props) => {
    const classes = useStyles();
    return (
        <footer role="footer" className={classes.MasonDayFooter} {...props}>
            <List role="link-list" className='list-unstyled'>
                <ListItem>
                    <Link data-testid="site-link" href='https://www.theknot.com/us/anna-lynd-and-connor-mason-dec-2022' className='text-dark'>
                        Wedding Website
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://thetransept.com/' className='text-dark'>
                        Venue Information
                    </Link>
                </ListItem>
            </List>
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
