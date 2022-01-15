import React, { useEffect } from 'react';
import { getItem, getItemsBySearch } from "../Actions/items";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Card, Divider, Typography, CircularProgress } from "@material-ui/core/";
import useStyles from "./styles"
import { Paper } from '@mui/material';



function ItemsDetails() {
    const { items, item, isLoading } = useSelector(state => state.items);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(getItem(id));

    }, [id]); //it should rerender when the id changes

    useEffect(() => {
        if (item) {
            dispatch(getItemsBySearch({ search:item }));
        }
    }, [item]);
    if (!item) return null;
    const openItem = (_id) => history.push(`/items/${_id}`);

    
    if (isLoading) {
        return (
            <Paper elevation={6}>
                <CircularProgress className={classes.loadingPaper} size="6em" />

            </Paper>
        )

    }
    // const recommendedItems = items.filter(({ _id }) => _id !== item._id);
    const category = item.category;
    const filteredItems = items.filter(({ _id }) => _id !== item._id );
    const recommendedItems = filteredItems.filter(cat => cat.category===category);
    console.log("filteredRecItems", recommendedItems)
    return (

        <Paper style={{ padding: '20px', borderRadius: '15px' }} raised elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h5"  >{item.title}</Typography>
                    <Typography variant="body2" color="textprimary" component="p"> {item.description}</Typography>
                    <Typography color="textPrimary" variant="h6">Price:$ {item.price}</Typography>
                    <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
                    <Divider style={{ margin: '20px 0' }} />

                </div>

                <div className={classes.imageSection}>
                    <img className={classes.media} src={item.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={item.title} />
                </div>

            </div>
            {!! recommendedItems.length && (
                <div className={classes.section}>
                    <Typography gutterBottom variant="h5">You might also be interested in:</Typography>
                    <Divider />
                    <div className={classes.recommendedItems}>
                        {recommendedItems.map(({ title, selectedFile, description, price, _id }) => (
                            <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openItem(_id)} key={_id}>
                                <Typography gutterBottom variant="h6">{title}</Typography>
                                <Typography gutterBottom variant="subtitle2">Price: $ {price}</Typography>
                                <Typography gutterBottom variant="subtitle2">{description}</Typography>
                                <img src={selectedFile} width="200px" />
                            </div>
                        ))}
                    </div>



                </div>
            )}
            <div>

            </div>




        </Paper>

    )
}

export default ItemsDetails
