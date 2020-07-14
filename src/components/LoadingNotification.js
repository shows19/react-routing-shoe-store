import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    notificationArea: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    '@keyframes blinker': {
        from: {opacity: 1},
        to: {opacity: 0}
    },
    loadingText: {
        textAlign: "center",
        color: "green",
        display: "block",
        animationName: '$blinker',
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationIterationCount:'infinite',    },
    errorText: {
        color:"red",
    },

  }));

export const LoadingNotification = ({loading, error}) => {
    const classes = useStyles();

    return (
        <>
            {loading && <div className={classes.notificationArea + ' contentArea'}>
                <Typography variant="h6" className={classes.loadingText}>Loading data...</Typography>
            </div>}
            {error && <div className={classes.notificationArea + ' contentArea'}>
                <Typography variant="h6" className={classes.errorText}>Error fetching data, please try again</Typography>
            </div>}            
        </>
    )
}
