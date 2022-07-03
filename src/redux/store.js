import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { products } from "../data";
import { cartReducer } from "./reducers/cartReducer";
import { productReducer } from "./reducers/productReducers";

export const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const middleware = [thunk];
localStorage.setItem("products", JSON.stringify(products));
const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    heartProduct: localStorage.getItem("heartProduct")
      ? JSON.parse(localStorage.getItem("heartProduct"))
      : [],
  },
};
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
