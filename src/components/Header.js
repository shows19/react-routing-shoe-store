import React from 'react'
import { Toolbar, AppBar, makeStyles, Typography } from '@material-ui/core';
import { Store } from '@material-ui/icons';
import { MenuLinks } from './MenuLinks';


const useStyles = makeStyles((theme) => ({
    root: {
      //display: 'flex',
      //alignItems: "center",
      //flexGrow: 1,
      marginBottom: "1px",
    },
    appbar: {
        backgroundColor: "#be0004",
    },
    heading: {
        textAlign: "center",
        fontSize: "1rem",
        '@media (min-width:470px)': {
            fontSize: "1.25rem",    // show bigger text tablets and above
        },
       
    },
    icon: {
        display: "none", 
        '@media (min-width:470px)': {
            display: "block",    // show icon on tablets and above
        },
    }
  }));

export const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="sticky" className={classes.appbar}>
            <Toolbar>
                <div className={classes.icon}>
                    <Store style={{fontSize: "50px"}} />
                </div>
                <Typography variant="h6" className={classes.heading}>Lucky's Shoe Store</Typography>
                <MenuLinks />
            </Toolbar>
        </AppBar>
        </div>
    )
}
