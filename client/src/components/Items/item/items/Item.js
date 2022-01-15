import React, { useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from "@material-ui/core/";
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";


import useStyles from "./styles";
import { addToCart } from "../../../../Actions/cart";



function Item({ item }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [btnColor, setBtnColor] = useState( 'white')

    const viewMoreDetails = () => {
        return history.push(`/items/${item._id}`);

    };

    // const handleAddToCart = () => {
    // dispatch({   
    //     type: "ADD_TO_CART",
    //     payload: item
    // })
    // };
    // console.log("item", item);
    const handleAddToCart = () => {
        dispatch(addToCart(item));
    };
    const handleAddToWishList = () => {
        setBtnColor("red");
        

    }

    return (
        <Card className={classes.card} raised elevation={6}>

            <ButtonBase
                component="span"
                name="test"
                className={classes.btnBase}
                onClick={viewMoreDetails}
            >
                <CardMedia className={classes.media} image={item.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} component="img"

                />



            </ButtonBase>
            <CardContent>
                <Typography className={classes.heading}  >{item.title}</Typography>
                <Typography className={classes.description} variant="body2" color="textprimary" component="p"> {item.description}</Typography>
                <Typography color="textSecondary" component="p">Price:$ {item.price}</Typography>

            </CardContent>


            <CardActions className={classes.cardActions}>
                <Button className={classes.cart} variant="contained" color="secondary" onClick={handleAddToCart}>Add to Cart<AddShoppingCart /></Button>
                <Tooltip title="Add to Wish List" arrow>
                    <IconButton>
                    <FavoriteBorderIcon style= {{backgroundColor:btnColor}} className={classes.favorite} onClick={handleAddToWishList} />
                    </IconButton>
                </Tooltip>

            </CardActions>


        </Card>
    )
}

export default Item