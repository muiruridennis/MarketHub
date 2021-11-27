import React from 'react';
// import { usePagination } from '@mui/material/Pagination';
import { Pagination, PaginationItem} from "@material-ui/lab";
import { Link} from "react-router-dom";
import useStyles from "./styles"

function Paginate() {
    const classes = useStyles();
    return (
        <Pagination
        classes={{ul:classes.ul}}
        count={3}
        page={1}
        variant="outlined"
        color="primary"
        renderItem= {(item) =>(
            <PaginationItem {...item} component= {Link} to={`/items?page=${1}`}
            />
        )}
        />
            
        
    ); 
};

export default Paginate
