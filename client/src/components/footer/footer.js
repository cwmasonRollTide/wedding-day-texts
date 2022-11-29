import React from 'react';
import {useStyles} from "./style";
import {Link, List, ListItem} from "@mui/material";

const MasonDayFooter = (props) => {
    const classes = useStyles();
    return (
        <footer role="footer" className={classes.MasonDayFooter} {...props}>
            <List role="link-list" className='list-unstyled'>
                <h3 className={classes.subHeader}>Links</h3>
                <ListItem>
                    <Link href='https://github.com/cwmasonRollTide/wedding-day-texts' className='text-dark'>
                        Github Project
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://www.theknot.com/us/anna-lynd-and-connor-mason-dec-2022' className='text-dark'>
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