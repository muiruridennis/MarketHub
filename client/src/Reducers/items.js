import { CREATEITEM, FETCH_ITEMS, FETCH_BYSEARCH, START_LOADING, END_LOADING, FETCH_ITEM } from "../constants/actionTypes";

export default (state = { items: [], isLoading: true }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ITEM:
            return { ...state, item: action.payload}; //item is sent from backend
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case CREATEITEM:
            return { ...state, items: [...state.items, action.payload] };
        case FETCH_BYSEARCH:
            return { ...state, items: action.payload.data };
        default:
            return state;
    }
};