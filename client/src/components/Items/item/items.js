
import React  from 'react';
import { CircularProgress, Grid } from '@material-ui/core/';
import { useSelector } from "react-redux";

import Item from "./items/Item";




function Items() {
    const {items, isLoading} = useSelector((state) => state.items);
    if (!items.length && ! isLoading ) return "No Items"

    return (
        isLoading ? <CircularProgress /> : (
            <Grid container  alignitems="stretch" spacing={3}>
                {items.map((item) => (
                    <Grid  key={item._id} item xs={6}  sm={6} md={4} lg={3}>
                        <Item item={item} />
                    </Grid> 
                ))}

            </Grid>
        )


    );

}

export default Items
