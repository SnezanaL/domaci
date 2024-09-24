import {
  Product,
  cartAction,
  cartState,
  productState,
  productAction,
} from "../ts/types";

// create initial state
export const initialState: productState = {
  products: [],
};

export function reducer(
  state: productState,
  action: productAction
): productState {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return state;
  }
}
