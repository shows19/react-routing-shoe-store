import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        //backgroundImage: "url(https://stockx-assets.imgix.net/Core/sneaker_plain.png?auto=compress,format)",
        // on mobile view
        backgroundImage: "url(https://stockx-360.imgix.net/Nike-Air-Max-2-Light-Atmos/Images/Nike-Air-Max-2-Light-Atmos/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1554736273&w=300)",
        backgroundSize: "contain",
        '@media (min-width:470px)': {
            backgroundImage: "url(https://stockx-assets.imgix.net/Core/sneaker_plain.png?auto=compress,format)"
            ,    // show this image on tablets and above
            backgroundSize: "cover",
        },
       //backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        //height: "calc(100vh - 65px)", // 65px header
        display: "flex",
        justifyContent: "center", // horizontal
        alignItems: "center", // vertical
        flexDirection: "column",
    },
    headingBackground: {
        backgroundColor: "rgba(0,0,0,1)", // 1 is opacity
        //opacity: "0.3",
        padding: "10px",
        borderColor: "white",
        borderStyle: "double",
    },
    heading: {
        fontSize: "2rem",
        '@media (min-width:470px)': {
            fontSize: "4rem",    // show bigger text tablets and above
        },
        color: "white",
    },
    heading2: {
        fontSize: "1em",
        '@media (min-width:470px)': {
            fontSize: "2rem",    // show bigger text tablets and above
        },
       color: "white",
    },

}));

export const HomePage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root + ' contentArea'}>
            {/* <img src="https://stockx-assets.imgix.net/Core/sneaker_plain.png?auto=compress,format" alt="Authentic Sneakers" /> */}
            <div className={classes.headingBackground}>
                <span className={classes.heading}>Authentic Sneakers</span>
            </div>
            <div className={classes.headingBackground}>
                <span className={classes.heading2}>Quality Guaranteed!</span>
            </div>
        </div>
    )
}
