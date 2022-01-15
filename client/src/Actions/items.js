import { CREATEITEM, FETCH_ITEMS, FETCH_BYSEARCH, START_LOADING, END_LOADING, FETCH_ITEM } from "../constants/actionTypes";
import * as api from "../Api/index";

export const createItem = (item) => async (dispatch) => {
    try {
        dispatch({type:START_LOADING});
        const {data} = await api.createItem(item);
        // history.push(`/items/${data._id}`);
        dispatch({type: CREATEITEM, payload: data});
        dispatch({type:END_LOADING});

    } catch (error) {
        console.log(error.message);
    }
};

export const getItem = (id) => async (dispatch) => {
    try {
        dispatch({type:START_LOADING});
        const {data} = await api.fetchItem(id);
        dispatch({type: FETCH_ITEM, payload: data});
        dispatch({type:END_LOADING});
        
    } catch (error) {
        console.log(error);
    }
};


export const getItems = (page) => async (dispatch) => {
    try {
        dispatch({type:START_LOADING});
        const {data:{data, currentpage, numberOfPages}} = await api.fetchItems(page); // through this data from server can be fetched
        dispatch({type: FETCH_ITEMS, payload:{data, currentpage, numberOfPages}});
        dispatch({type:END_LOADING});
        
        
    } catch (error) {
        console.log(error.message);
    }
};

export const getItemsBySearch =  (searchQuery)=> async (dispatch)=>{
    try {
        dispatch({type:START_LOADING });
        const {data:{ data } } = await api.fetchItemsBySearch(searchQuery);
        dispatch({type: FETCH_BYSEARCH, payload: {data}});// its destucted {data} and not data
        
        dispatch({type: END_LOADING });

    } catch (error) {
        console.log(error.message);
        
    }
}
