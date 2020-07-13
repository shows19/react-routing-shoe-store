import React from 'react'
import { makeStyles, TableRow, TableCell } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        //padding: "10px",
    },
    title: {
        color: "darkgrey",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    value: {

    },
}));

export const ProductAttributeRow = ({title, value}) => {
    const classes = useStyles();

    return (
        <>
            <TableRow>
                <TableCell>
                    <span className={classes.title}>{title}</span>
                </TableCell>
                <TableCell>
                    <span className={classes.value}>{value}</span>
                </TableCell>
            </TableRow>
        </>
    )
}
