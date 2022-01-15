import React, { useEffect } from 'react';
import { Grid, Grow, Container, Paper } from "@material-ui/core";
import { useHistory, Link, useLocation } from "react-router-dom";


import Search from '../Categories/search';
import ItemsForm from '../Items/itemsForm';
import Items from '../Items/item/items';

import Paginate from "../../helpers/pagination/paginate";


function Home() {
    const query = useQuery();

    function useQuery() {
        return new URLSearchParams(useLocation().search);

    };

    const page = query.get("page") || 1;
    const searchQuery = query.get("searchQuery")

    return (
        <Grow in>
            <Container margin="0">

                <Grid container justifyContent="flex-start" alignItems="center" spacing={2}>
                    <Grid item xs={12} ><Search /></Grid>
                    <Grid item xs={12} sm={12} md={12}  ><Items /></Grid>
                    {/* <Grid item xs={12} sm={4}><ItemsForm /></Grid> */}
                    <Grid item xs={12} sm={6} md={8} >
                        {(!searchQuery) && (
                            <Paper  elevation={6}>
                                <Paginate page={page} />

                            </Paper>
                        )}

                    </Grid>


                </Grid>

            </Container>

        </Grow>
    )
}

export default Home
