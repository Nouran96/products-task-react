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
  products: [...action.payload.products],
  product: { ...state.product },
  fetching: false,
  error: null,
});

const addSingleProduct = (state, action) => ({
  products: [...state.products],
  product: { ...action.payload.product },
  fetching: false,
  error: null,
});

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH:
    case SINGLE_PRODUCT_FETCH:
      return {
        products: [...state.products],
        product: { ...state.product },
        fetching: true,
        error: null,
      };
    case PRODUCTS_FETCH_ERROR:
      return {
        products: [],
        product: {},
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
