import * as types from "../constants";

export const cartReducer = (
  state = { cartItems: [], heartProduct: [] },
  action
) => {
  switch (action.type) {
    case types.HEART:
      const heartItem = action.payload;
      const existHeart = state.heartProduct.find((e) => e.id === heartItem.id);
      if (existHeart) {
        return {
          ...state,
          heartProduct: state.heartProduct.map((e) =>
            e.id === heartItem.id ? existHeart : e
          ),
        };
      } else {
        return {
          ...state,
          heartProduct: [...state.heartProduct, heartItem],
        };
      }

    case types.HATE:
      return {
        ...state,
        heartProduct: state.heartProduct.filter(
          (e) => e.id !== action.payload.id
        ),
      };

    case types.ADD_TO_CART:
      const newItem = action.payload;
      const exist = state.cartItems.find(
        (e) => e.id === newItem.id && e.size === newItem.size
      );
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((e) =>
            e.id === exist.id && e.size === exist.size
              ? { ...exist, quantity: exist.quantity + newItem.quantity }
              : e
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };

    case types.DELETE_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item, index) => index !== action.payload
        ),
      };

    case types.INCREASE_CART:
      const itemUpdate = action.payload;
      const item = state.cartItems.find(
        (e) => e.id === itemUpdate.id && e.size === itemUpdate.size
      );
      return {
        ...state,
        cartItems: state.cartItems.map((e) =>
          e.id === itemUpdate.id && e.size === itemUpdate.size
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : e
        ),
      };
    case types.DECREASE_CART:
      const decreaseItem = action.payload;
      const itemOld = state.cartItems.find(
        (e) => e.id === decreaseItem.id && e.size === decreaseItem.size
      );
      return {
        ...state,
        cartItems: state.cartItems.map((e) =>
          e.id === decreaseItem.id && e.size === decreaseItem.size
            ? {
                ...itemOld,
                quantity: itemOld.quantity - 1 < 1 ? 1 : itemOld.quantity - 1,
              }
            : e
        ),
      };
    default:
      return state;
  }
};
