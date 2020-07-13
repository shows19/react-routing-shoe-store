import React, { useEffect, useState } from 'react'
import { productListAPI } from '../api/productListAPI';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: "10px",
    },
    link: {
        textDecoration: "none",
    },
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

export const ProductList = () => {
    const classes = useStyles();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{

        const getData = async()=>{
            setLoading(true);
            await productListAPI()
            .then(res => {
                //console.log("Result...", res);
                if (res){
                    setProducts(res);
                    setLoading(false);    
                }else{
                    setLoading(false);
                    setError(true);                       
                }
            })                            
        };

        getData();

    },[]);

    return (
        <div className={classes.root}>
            {loading && <div className={classes.notificationArea + ' contentArea'}>
                <Typography variant="h4" className={classes.loadingText}>Loading data...</Typography>
            </div>}
            {error && <div className={classes.notificationArea + ' contentArea'}>
                <Typography variant="h4" className={classes.errorText}>Error fetching data, please try again</Typography>
            </div>}
            {!loading && products && 
                <Grid container spacing={2}>
                    {products.map((item)=>(
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Link to={`/products/${item.uuid}`} className={classes.link}>
                                <ProductCard uuid={item.uuid} />
                            </Link>
                        </Grid>
                    ))}
                
                </Grid>
            }
        </div>
    )
}
