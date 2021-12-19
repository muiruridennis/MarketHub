import React, { useState, useEffect} from 'react';
// import { usePagination } from '@mui/material/Pagination';
import { Pagination, PaginationItem} from "@material-ui/lab";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getItems } from "../../Actions/items"; 
import useStyles from "./styles"

function Paginate({page}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { numberOfPages } = useSelector((state) => state.items);

    useEffect(() => {
        if (page){
            dispatch(getItems(page));
        }

    }, [dispatch, page]);
    
    
    return (
        <Pagination
        classes={{ul:classes.ul}}
        count={numberOfPages}
        page={Number(page) || 1}
        variant="outlined"
        color="primary"
        renderItem= {(item) =>(
            <PaginationItem {...item} component= {Link} to={`/items?page=${item.page}`}
            />
        )}
        />
            
        
    ); 
};

export default Paginate
