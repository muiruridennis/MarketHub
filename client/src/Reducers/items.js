import { CREATEITEM, FETCH_ITEMS } from "../constants/actionTypes";

export default (items = [], action) => {
    switch (action.type) {
        case CREATEITEM:
            return [...items, action.payload];
        case FETCH_ITEMS:
            return action.payload;
        default:
            return items;
    }
};