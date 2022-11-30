import React from 'react';
import {useStyles} from "./style";
import {Link, List, ListItem} from "@mui/material";

const MasonDayFooter = (props) => {
    const classes = useStyles();
    const onAClick = () => {
        console.log('THIS IS WEIRD');
    }
    return (
        <footer role="footer" className={classes.MasonDayFooter} {...props}>
            <List role="link-list" className='list-unstyled'>
                <h3 className={classes.subHeader}>Links</h3>
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
            <div role="event-date" className='text-center p-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                &copy; {new Date().getFullYear()} Event Date:{' '}
            </div>
        </footer>
    );
};

export default MasonDayFooter;

// My Feet
//
// I run to you now
// I will run to you till death
// And then I will crawl

// As I move your way
// I will prove our love transcends
// Even Heaven's gates
