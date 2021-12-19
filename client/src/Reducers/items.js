import { CREATEITEM, FETCH_ITEMS, FETCH_BYSEARCH } from "../constants/actionTypes";

export default (state = { items: [] }, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                items:action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case CREATEITEM:
            return action.payload;
        case FETCH_BYSEARCH:
            return {...state, items: action.payload.data};
        default:
            return state;
    }
};