import { CREATEITEM, FETCH_ITEMS, FETCH_BYSEARCH } from "../constants/actionTypes"
import * as api from "../Api/index";

export const createItem = (item) => async (dispatch) => {
    try {
        const {data} = await api.createItem(item);
        dispatch({type: CREATEITEM, payload: data})

    } catch (error) {
        console.log(error.message);
    }
};

export const getItems = (page) => async (dispatch) => {
    try {
        const {data:{data, currentpage, numberOfPages}} = await api.fetchItems(page); // through this data from server can be fetched
        dispatch({type: FETCH_ITEMS, payload:{data, currentpage, numberOfPages}});
        
        
    } catch (error) {
        console.log(error.message);
    }
};

export const getItemsBySearch =  (searchQuery)=> async(dispatch)=>{
    try {
        const {data:{data}} = await api.fetchItemsBySearch(searchQuery);
        dispatch({type: FETCH_BYSEARCH, payload: {data}});// its destucted {data} and not data
        console.log("SearchData", data);

    } catch (error) {
        console.log(error.message)
        
    }
}
