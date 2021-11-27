import {combineReducers} from "redux";

import authReducer from "./Auth";
import items from "./items";
import cart from "./cart";

export const rootReducers = combineReducers({ items, authReducer, cart });