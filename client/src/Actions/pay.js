import { MAKE_PAYMENT } from "../constants/actionTypes";
import * as api from '../Api/index.js';

export const itemPayment = (formData) => async dispatch => {
    
    try {
        const { data } = await api.payItem(formData);
        dispatch({ type: MAKE_PAYMENT,  payload: data });

    } catch (error) {
        console.log(error)

    }
};