import React, {useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, Grid } from "@material-ui/core";
// import "./index.css"
import { useHistory, useLocation, UseParam } from "react-router-dom";
// import ClearIcon from '@mui/icons-material/Clear';
import Pay from '../../helpers/payment/pay';
import { deleteCart, increaseQuantity, decreaseQuantity, } from "../../Actions/cart";
import useStyles from "./styles"

function MyShopping() {
    const items = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const test = 'this is a test';

    let listCart = [];
    var totalCart = 0;
    Object.keys(items.carts).forEach((item) => {
        totalCart += items.carts[item].quantity * items.carts[item].price;
        listCart.push(items.carts[item]);
        console.log("listCart", totalCart);

    });

    const totalPrice = (price, total) => {
        return Number(price * total).toLocaleString('en-US');
    };
     const user = JSON.parse(localStorage.getItem('profile'));
     console.log(user);
   
    const checkOut = () => {
        if (!user) {
            history.push("/auth")
        } else {
            history.push("/items/payment")
        }

    };
    const payDetails = {
        username: user.newUser.name,
        email: user.newUser.email,
        totalCart
    };

    return (
        <Grid container ustifyContent="flex-start" alignItems="center" spacing={4}>
            <Grid item xs={12} sm={12} md={9}>
                <TableContainer component={Paper}>
                    <Typography className={classes.heading} variant="h6">Shopping Cart </Typography>
                    <Table sx={{ minWidth: 360 }} aria-label="spanning table">
                        <TableHead>

                            <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Total price</TableCell>

                            </TableRow>

                        </TableHead>
                        <TableBody>
                            {
                                listCart.map((item, key) => {
                                    return (
                                        <TableRow key={key}>
                                            <TableCell align="left"><Button variant="contained" color="secondary" size="small" onClick={() => dispatch(deleteCart(key))} >X</Button></TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell> <img src={item.image} height="70px" width="80px" /> </TableCell>
                                            <TableCell>{item.price} $</TableCell>
                                            <TableCell >
                                                <span><Button variant="contained" color="primary" size="small" onClick={() => dispatch(decreaseQuantity(key))} >-</Button></span>
                                                <span><Button variant="contained" color="primary" size="small">{item.quantity}</Button></span>
                                                <span><Button variant="contained" color="primary" size="small" onClick={() => dispatch(increaseQuantity(key))}>+</Button></span>

                                            </TableCell>
                                            <TableCell>{totalPrice(item.price, item.quantity)} $</TableCell>



                                        </TableRow>

                                    )

                                })
                            }
                            <TableRow align="center" >
                                <TableCell>SUBTOTAL:</TableCell>
                                <TableCell >{Number(totalCart).toLocaleString('en-US')} $</TableCell>
                                {totalCart <= 0 ? <p className={classes.p}>Your Cart is empty! <br></br> Please add an Item"</p> :
                                 <Button className={ user===null ? classes.checkout: classes.noCheckout } variant="contained" onClick={checkOut} >Proceed to Checkout</Button>
                                }


                            </TableRow>

                        </TableBody>

                    </Table>



                </TableContainer>
            </Grid>
            <Grid item className={ user=== null ? classes.isNull : classes.userLogged } xs={12} sm={12} md={3}  >
                <Pay payDetails={ payDetails} />
            </Grid>

        </Grid>








    )
}

export default MyShopping
