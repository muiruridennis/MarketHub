import React, { useState, useEffect } from 'react';
import { Paper, Button, Typography, TextField, Select, InputLabel, MenuItem, InputAdornment, OutlinedInput } from "@material-ui/core";
import Filebase from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";

import useStyles from "./styles";
import { createItem } from "../../Actions/items"

function ItemsForm() {
    const [itemData, setItemData] = useState({ title: "", description: "", price: "", selectedFile: "", category: "", });
    
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createItem({...itemData, history}));
        clear(); //helps to clear form after data is submitted

    }
    const clear = () => {
        setItemData({ title: "", description: "", price: "", selectedFile: "", category: "", })
    };
    const item = useSelector((state) =>state.itemData);
    useEffect(() => {
       if (item) setItemData(item)
    }, [item])  
    const itemCategories = [
        { item: "clothes", value: "clothes" },
        { item: "Shoe", value: "shoe" },
        { item: "Electronics", value: "Electronics" },
        { item: "Vegetables", value: "Vegetables" },
        { item: "Jewellaries", value: "Jewellaries" },
        { item: "Toys", value: "toys" },
        { item: "Utensills", value: "utensills" },
        { item: "Food", value: "Food" },
        { item: "Furniture", value: "Furniture" },
    ]
    return (
        <Paper classname={classes.paper}>
            <form noValidate onSubmit={handleSubmit} autoComplete="off" className={`${classes.root} ${classes.form}`}>
                <Typography className={classes.heading} variant="h6">Create an Item</Typography>
                <TextField variant="outlined" label="Title" fullWidth value={itemData.title} onChange={(e) => setItemData({ ...itemData, title: e.target.value })} />
                <TextField variant="outlined" label="Description" fullWidth value={itemData.description} onChange={(e) => setItemData({ ...itemData, description: e.target.value })} />
                <InputLabel className={classes.inputLabel} variant="outlined"  >Select Category</InputLabel>
                <Select variant="outlined" value={itemData.category} label="Select category" fullwidth onChange={(e) => setItemData({ ...itemData, category: e.target.value })} >
                    {itemCategories?.map(option => {
                        return (
                            <MenuItem key={option.item} value={option.value}>
                                {option.value.charAt(0).toUpperCase() + option.value.slice(1)}


                            </MenuItem>

                        )

                    })

                    }
                </Select>
                <TextField type="number" variant="outlined" label="Price" fullWidth value={itemData.price} onChange={(e) => setItemData({ ...itemData, price: e.target.value })}
                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                />
                <div className={classes.fileInput}><Filebase type="file" multiple={false} onDone={({ base64 }) => setItemData({ ...itemData, selectedFile: base64 })} /></div>
                <Button type="submit" className={classes.buttonSubmit} variant="contained" size="large" color="primary" fullWidth>Submit</Button>
                <Button onClick={clear} variant="contained" color="secondary" fullWidth>Clear</Button>

            </form>

        </Paper>
    )
}

export default ItemsForm
