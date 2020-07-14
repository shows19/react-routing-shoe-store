import React, { useEffect, useState } from 'react'
import { productListAPI } from '../api/productListAPI';
import { Grid, makeStyles } from '@material-ui/core';
import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom';
import { LoadingNotification } from './LoadingNotification';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: "10px",
    },
    link: {
        textDecoration: "none",
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
            <LoadingNotification loading={loading} error={error} />
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
