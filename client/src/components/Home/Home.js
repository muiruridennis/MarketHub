import React, { useEffect } from 'react';
import { Grid, Grow, Container, Paper} from "@material-ui/core";
import { useDispatch } from "react-redux";

import Category from '../Categories/category';
import ItemsForm from '../Items/itemsForm';
import Items from '../Items/item/items';
import { getItems } from "../../Actions/items"; 
import Paginate from "../../helpers/pagination/paginate"

function Home() {
   const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItems());

    }, [dispatch]);

    return (
        <Grow in>
            <Container>
                
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={2}>
                    <Grid item xs={12} ><Category /></Grid>
                    <Grid item xs={12}sm={12} md={8}  ><Items /></Grid>
                    {/* <Grid item xs={12} sm={4}><ItemsForm /></Grid> */}
                    <Grid item xs={12} sm={6}>
                        <Paper >
                            <Paginate/>

                        </Paper>
                        </Grid>


                </Grid>

            </Container>

        </Grow>
    )
}

export default Home
