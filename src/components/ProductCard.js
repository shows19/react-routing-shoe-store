import React, { useEffect, useState } from 'react'
import { Typography, Paper, makeStyles } from '@material-ui/core'
import apiBase from '../api/apiBase';
import { LoadingNotification } from './LoadingNotification';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "10px",
        minHeight: "300px",
    },
    title: {
        color: "#f44336",
    },
  }));
  
export const ProductCard = ({uuid}) => {
    const classes = useStyles();
    
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

                <Paper className={classes.root}>
                    <div>
                        <Typography variant="h6" className={classes.title}>{productData.title}</Typography>
                    </div>
                    <div>
                        <img src={productData.media.thumbUrl} alt={productData.title} />
                    </div>
                    <div>
                        <Typography variant="subtitle1">{productData.colorway}</Typography>
                    </div>
                </Paper>
            }
        </div>
    )
}
