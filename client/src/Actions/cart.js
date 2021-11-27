import { ADD_TO_CART, GET_NUMBER_CART, UPDATE_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART } from "../constants/actionTypes";

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload

    }
};

export const updateCart = (payload) => {
    return {
        type: UPDATE_CART,
        payload

    }
};

export const deleteCart = (payload) => {
    return{
        type:DELETE_CART,
        payload
    }
}

export const increaseQuantity = (payload) => {
    return {
        type: INCREASE_QUANTITY,
        payload

    }
};

export const decreaseQuantity = (payload) => {
    return {
        type: DECREASE_QUANTITY,
        payload

    }
};

export const getNumerCat = (payload) => {
    return {
        type: GET_NUMBER_CART,
        

    }
};
