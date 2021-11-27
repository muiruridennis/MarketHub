import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core/";
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import { useDispatch } from 'react-redux';


import useStyles from "./styles";
// import { addToCart} from "../../../../Actions/cart";



function Item({ item }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const addToCart = () => {
    dispatch({   
        type: "ADD_TO_CART",
        payload: item
    })
    };
    // console.log("item", item);

    return (
        <Card className={classes.card}>

            <CardMedia className={classes.media} image={item.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} component="img"
                
            />
            <CardContent>
                <Typography className={classes.heading}  >{item.title}</Typography>
                <Typography className={classes.description} variant="body2" color="textprimary" component="p"> {item.description}</Typography>
                <Typography color="textSecondary" component="p">Price:$ {item.price}</Typography>

            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button className={classes.cart} variant="contained" color="secondary" onClick={addToCart}>Add to Cart<AddShoppingCart /></Button>
            </CardActions>


        </Card>
    )
}

export default Item