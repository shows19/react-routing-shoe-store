import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        //padding: "10px",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
    },
    heading: {
        padding: "20px",
    },
    heading1: {
        fontSize: "1rem",   // on mobile view
        '@media (min-width:470px)': {
            fontSize: "2.125rem" // on tablets and above
        },
    },
    heading2: {
        fontSize: "1rem",   // on mobile view
        '@media (min-width:470px)': {
            fontSize: "1.25rem" // on tablets and above
        },
    },
    content: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "35vh",
    },
    contentText: {
        fontSize: "1.3rem",
        '@media (min-width:470px)': {
            fontSize: "2.5rem" // on tablets and above
        },
        '@media (min-width:768px)': {
            fontSize: "2rem" // on tablets and above
        },
       fontWeight: "bold",
        padding: "10px",
    },
    img: {
        backgroundImage: "url(https://stockx-360.imgix.net/Air-Jordan-11-Retro-Low-IE-Volt/Images/Air-Jordan-11-Retro-Low-IE-Volt/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1538080256&w=500)",
        //backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "70vh",
    },
    imgText: {
        fontSize:"2rem", 
        '@media (min-width:470px)': {
            fontSize: "3rem" // on tablets and above
        },
        color:"#696c74"
    },
}));

export const AboutUs = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.heading}>
                    <Typography variant="h4" className={classes.heading1}>
                        PIAIC - Project 3 (Shoe store - React Routing)
                    </Typography>
                    <Typography variant="h6" className={classes.heading2}>
                        <span style={{color: "yellow"}}>Reference data taken from: StockX API</span>
                    </Typography>
               </Grid>
                <Grid item xs={12} lg={6} className={classes.content}>
                    <Typography className={classes.contentText}>
                        StockX is the world’s first stock market for things – a live ‘bid/ask’ marketplace. Buyers place bids, sellers place asks and when a bid and ask meet, the transaction happens automatically. Retro Jordans, Nikes, Yeezys and more – now 100% authentic guaranteed.
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <div className={classes.img}>
                        {/* <img src="https://stockx-assets.imgix.net/Core/sneaker_plain.png?auto=compress,format" alt="Authentic Sneakers" /> */}
                        <span className={classes.imgText}>Stock X</span>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
