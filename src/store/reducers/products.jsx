import { PRODUCTS_ADD, PRODUCTS_FETCH } from "../types/products";

const INITIAL_STATE = {
  products: [],
  fetching: false,
  error: null,
};

const addProducts = (state, action) => ({
  products: [...action.payload.products],
  fetching: false,
  error: null,
});

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH:
      return { products: [...state.products], fetching: true, error: null };
    case PRODUCTS_ADD:
      return addProducts(state, action);
    default:
      return state;
  }
};

export default productsReducer;
