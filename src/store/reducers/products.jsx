import {
  PRODUCTS_ADD,
  PRODUCTS_FETCH,
  PRODUCTS_FETCH_ERROR,
  SINGLE_PRODUCT_ADD,
  SINGLE_PRODUCT_FETCH,
} from "../types/products";

const INITIAL_STATE = {
  products: [],
  product: {},
  fetching: false,
  error: null,
};

const addProducts = (state, action) => ({
  ...state,
  products: [...action.payload.products],
  fetching: false,
});

const addSingleProduct = (state, action) => ({
  ...state,
  product: { ...action.payload.product },
  fetching: false,
});

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH:
    case SINGLE_PRODUCT_FETCH:
      return {
        ...state,
        fetching: true,
      };
    case PRODUCTS_FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
      };
    case PRODUCTS_ADD:
      return addProducts(state, action);
    case SINGLE_PRODUCT_ADD:
      return addSingleProduct(state, action);
    default:
      return state;
  }
};

export default productsReducer;
