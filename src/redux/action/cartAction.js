import * as types from "../constants";

export const addToCart = (product) => (dispatch, getState) => {
  dispatch({
    type: types.ADD_TO_CART,
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: product.quantity,
      size: product.size,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const deleteCart = (index) => (dispatch, getState) => {
  dispatch({
    type: types.DELETE_CART,
    payload: index,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const increaseCart = (item) => async (dispatch, getState) => {
  dispatch({
    type: types.INCREASE_CART,
    payload: item,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const decreaseCart = (item) => async (dispatch, getState) => {
  dispatch({
    type: types.DECREASE_CART,
    payload: item,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};