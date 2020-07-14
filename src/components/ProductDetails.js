import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { makeStyles, Typography, Paper, Grid } from '@material-ui/core';
import apiBase from '../api/apiBase';
import { ProductDetailsInner } from './ProductDetailsInner';
import { LoadingNotification } from './LoadingNotification';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "20px",
    },
    title: {
        color: "#f44336",
        fontWeight: "bold",
        fontSize: "1.5rem",
        '@media (min-width:470px)': {
            fontSize: "2.125rem" // on tablets and above
        },
    },
    img: {
        width: "80%",
    },
    subtitleRoot: {
        fontSize: "0.9rem",
        '@media (min-width:470px)': {
            fontSize: "1.25rem" // on tablets and above
        },
    },
    subtitle: {
        color: "darkgrey",
        fontWeight: "bold",
    },
    subtitleValue: {
        color: "green",
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
            <LoadingNotification loading={loading} error={error} />
            {!loading && productData && 

                <Paper elevation={0} className={classes.root}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h4" className={classes.title}>{productData.title}</Typography>
                            <Typography variant="h6" className={classes.subtitleRoot}>
                                <span className={classes.subtitle}>Condition: </span><span className={classes.subtitleValue} >{productData.condition}</span> {' | '}
                                <span className={classes.subtitle}>Brand: </span><span className={classes.subtitleValue} >{productData.brand}</span> {' | '}
                                <span className={classes.subtitleValue} >100% Authentic</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <img src={productData.media.smallImageUrl} alt={productData.title} className={classes.img} />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <ProductDetailsInner productData={productData} />
                        </Grid>
                    </Grid>
                </Paper>
            }
        </div>
    )
}
