import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "auto",
    },
    links: {
        fontSize: "0.7rem", 
        '@media (min-width:470px)': {
            fontSize: "1.1rem",    // show bigger text tablets and above
        },
        textAlign:"right",
        color: "white",
    },
}));

export const MenuLinks = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <pre className={classes.links}>
                <nav>
                    <Link to="/" className={classes.links}>Home</Link>{" | "}
                    <Link to="/products" className={classes.links}>Products</Link>{" | "}
                    <Link to="/about-us" className={classes.links}>About Us</Link> 
                </nav>
            </pre>
        </div>
    )
}
