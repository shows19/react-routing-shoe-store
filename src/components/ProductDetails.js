import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { makeStyles, Typography, Paper, Grid } from '@material-ui/core';
import apiBase from '../api/apiBase';
import { ProductDetailsInner } from './ProductDetailsInner';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "20px",
    },
    notificationArea: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "#f44336",
        fontWeight: "bold",
        //textAlign: "center",
    },
    img: {
        width: "80%",
    },
    subtitle: {
        color: "darkgrey",
        fontWeight: "bold",
    },
    subtitleValue: {
        color: "green",
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

export const ProductDetails = () => {
    const classes = useStyles();

    const {uuid} = useParams();
    //console.log("ProductId: ", productId);
    const [productData, setProductData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            if(uuid){
                setLoading(true);
                await apiBase.get(uuid)
                    .then(res => {
                        //console.log("Product: ",res.data.Product);
                        setProductData(res.data.Product);
                        setLoading(false);    
                    })
                    .catch(res => {
                        //result = res;
                        console.log("Error: ",res);
                        setLoading(false);
                        setError(true);
                    });                               
            }
        };

        getData();
    },[uuid]);

    return (
        <div>
            {loading && <div className={classes.notificationArea + ' contentArea'}>
                <Typography variant="h4" className={classes.loadingText}>Loading data...</Typography>
            </div>}
            {error && <div className={classes.notificationArea + ' contentArea'}>
                <Typography variant="h4" className={classes.errorText}>Error fetching data, please try again</Typography>
            </div>}
            {!loading && productData && 

                <Paper elevation={0} className={classes.root}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h4" className={classes.title}>{productData.title}</Typography>
                            <Typography variant="h6">
                                <span className={classes.subtitle}>Condition: </span><span className={classes.subtitleValue} >{productData.condition}</span> {' | '}
                                <span className={classes.subtitle}>Brand: </span><span className={classes.subtitleValue} >{productData.brand}</span> {' | '}
                                <span className={classes.subtitleValue} >100% Authentic</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <img src={productData.media.smallImageUrl} alt={productData.title} className={classes.img} />
                        </Grid>
                        <Grid item xs={5}>
                            <ProductDetailsInner productData={productData} />
                        </Grid>
                    </Grid>
                </Paper>
            }
        </div>
    )
}
