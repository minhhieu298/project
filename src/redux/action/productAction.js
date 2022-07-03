// import { products } from "../../data";
import { products } from "../../data";
import * as types from "../constants";

export const heartProduct = (product) => (dispatch, getState) => {
  dispatch({
    type: types.HEART,
    payload: {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    },
  });
  localStorage.setItem(
    "heartProduct",
    JSON.stringify(getState().cart.heartProduct)
  );
};

export const hateProduct = (item) => (dispatch, getState) => {
  dispatch({
    type: types.HATE,
    payload: item,
  });
  localStorage.setItem(
    "heartProduct",
    JSON.stringify(getState().cart.heartProduct)
  );
};

export const createProduct = (item) => (dispatch) => {
  dispatch({
    type: types.CREATE,
    payload: item,
  });
  localStorage.setItem("products", JSON.stringify([...products, item]));
};

export const getAllProducts = () => (dispatch) => {
  dispatch({
    type: types.GET_ALL_PRODUCT,
  });
};
