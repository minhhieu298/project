import { products } from "../../data";
import * as types from "../constants";

export const productReducer = (state = { products: products }, action) => {
  switch (action.type) {
    // case types.GET_ALL_PRODUCT:
    //   return {
    //     ...state,
    //     products: products,
    //   };

    case types.CREATE:
      return {
        ...state,
        products: [...products, action.payload],
      };

    default:
      return state;
  }
};

// export const newProductReducer = (state = { products: {} }, action) => {
//   switch (action.type) {
//     case types.CREATE:
//       return {
//         ...state,
//         product: action.payload,
//       };

//     default:
//       return {
//         state,
//       };
//   }
// };
