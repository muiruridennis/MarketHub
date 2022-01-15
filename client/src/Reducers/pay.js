import {MAKE_PAYMENT} from "../constants/actionTypes";

const payReducer = (state , action) => {
    switch (action.type) {
        case MAKE_PAYMENT:
            return { ...state };
        default:
            return state;
    }
}
export default payReducer;
