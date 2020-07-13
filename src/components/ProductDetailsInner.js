import React from 'react'
import { makeStyles, TableContainer, Table, TableBody, TableRow, TableCell, Button } from '@material-ui/core'
import { ProductAttributeRow } from './ProductAttributeRow';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        //padding: "10px",
    },
    button: {
        backgroundColor: "#ff553a"
    },
    buttonArea: {
        textAlign: "center",
    },
    link: {
        textDecoration: "none",
        color: "white",
    },

}));

export const ProductDetailsInner = ({productData}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TableContainer>
                <Table>
                    <TableBody>
                        <ProductAttributeRow title="Style:" value={productData.styleId} />
                        <ProductAttributeRow title="Color way:" value={productData.colorway} />
                        <ProductAttributeRow title="RETAIL PRICE:" value={'USD ' + productData.retailPrice} />
                        <ProductAttributeRow title="RELEASE DATE:" 
                        value={new Date(productData.releaseDate).toDateString()} />
                        <ProductAttributeRow title="Description:" 
                        value={(productData.description !=='')?productData.description : productData.title} />
                        <TableRow>
                            <TableCell colSpan={2} className={classes.buttonArea}>
                                <Button variant="contained" className={classes.button}>
                                    <Link to="/products" className={classes.link}>Product List</Link>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );

}
