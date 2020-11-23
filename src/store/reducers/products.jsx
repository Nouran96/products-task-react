import { PRODUCTS_ADD } from "../types/products";

const INITIAL_STATE = {
  products: [],
};

const addProducts = (state, action) => ({
  products: [...action.payload.products],
});

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_ADD:
      return addProducts(state, action);
    default:
      return state;
  }
};

export default productsReducer;
