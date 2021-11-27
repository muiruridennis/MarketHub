import { CREATEITEM, FETCH_ITEMS } from "../constants/actionTypes"
import * as api from "../Api/index";

export const createItem = (item) => async (dispatch) => {
    try {
        const {data} = await api.createItem(item);
        dispatch({type: CREATEITEM, payload: data})

    } catch (error) {
        console.log(error.message);
    }
};

export const getItems = () => async (dispatch) => {
    try {
        const {data} = await api.fetchItems(); // through this data from server can be fetched
        dispatch({type: FETCH_ITEMS, payload: data});
        
        
    } catch (error) {
        console.log(error.message);
    }
};

export const getItemsBySearch =  (searchQuery)=> async(dispatch)=>{
    try {
        const {data:{data}} = await api.fetchItemsBySearch(searchQuery);
        console.log("data", data);
    } catch (error) {
        console.log(error.message)
        
    }
}
