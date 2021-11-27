import { ADD_TO_CART, GET_NUMBER_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART } from "../constants/actionTypes";

const initialState = {
    numberCart: 0,
    carts: [],

}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.numberCart == 0) {
                let cart = {
                    id: action.payload._id,
                    quantity: 1,
                    name: action.payload.title,
                    image: action.payload.selectedFile,
                    price: action.payload.price,
                }

                state.carts.push(cart); // adds an new item to the carts array
            } else {

                let check = false; // checks if an item already exists in the carts array, if item  exist adds the quantity
                state.carts.map((item, key) => {
                    if (item.id == action.payload._id) {
                        state.carts[key].quantity++;
                        check = true;
                    }

                });
                if (!check) { // if item doesn't exist, adds it to the carts array
                    let _cart = {
                        id: action.payload._id,
                        quantity: 1,
                        name: action.payload.title,
                        image: action.payload.selectedFile,
                        price: action.payload.price
                    }
                    state.carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            state.carts[action.payload].quantity++;

            return {
                ...state
            }
        case DECREASE_QUANTITY:
            let quantity = state.carts[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.carts[action.payload].quantity--;
            }

            return {
                ...state
            }
        case GET_NUMBER_CART:
            return {
                ...state
            }
        case DELETE_CART:
            let quantity_ = state.carts[action.payload].quantity;
            let filterdArray = state.carts.filter((item) => {
                return item.id != state.carts[action.payload].id

            })
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                carts: filterdArray


            }


        default:
            return state;
    }



};
