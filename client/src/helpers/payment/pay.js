import React, { useState } from 'react';
import { Paper, Typography, Button, Grid, TextField } from "@material-ui/core";
import {useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom"
import useStyles from './styles';
import {itemPayment} from '../../Actions/pay'

function Pay(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
     const [formData, setformData] = useState({
         name: props.payDetails.username,
         email: props.payDetails.email,
         price: props.payDetails.totalCart
     });

     const handlePay = (e) => {
         e.preventDefault();
         console.log("formData",formData)
         dispatch(itemPayment);
         setformData('');
         history.push("/")


     };

    return (
        <Paper className={classes.paper} elevation={3}>
            <Typography variant='h6'>Please pay via Mpesa</Typography>
            <form className={classes.form} autoComplete="false">
                <Grid container spacing={2}>
                    <TextField variant="outlined"  fullWidth
                        value={formData.name}
                    />
                    <TextField name="email" label="Email Adress" variant="outlined"  fullWidth
                    value={formData.email}
                
                    />
                    <TextField name="Amount" label="Amount"  half variant="outlined" required fullWidth
                    value={formData.price}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" disabled={formData.price===0} className={classes.submit} onClick = {handlePay}>Pay</Button>
                </Grid>

            </form>
        </Paper>
        // <div>{props.totalCart}</div>
    )
}

export default Pay
// We are waiting for you
// Please follow the instructions and do not refresh or leave this page.
// This may take up to 2 minutes.
// You will receive a prompt on mobile number to enter your PIN to authorize your payment request.
