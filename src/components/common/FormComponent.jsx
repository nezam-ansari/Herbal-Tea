import React from 'react'
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '20px 0',
        width: 300,
    },
}));

export const FormComponent = (props) => {
    const classes = useStyles();
    console.log("======Props=>", props)
    const { label } = props;
    return (
        <TextField className={classes.root} error={false} id="outlined-basic" label={label} variant="outlined" />
    )
}