import {
  PRODUCTS_FETCH,
  PRODUCTS_ADD,
  PRODUCTS_FETCH_ERROR,
  SINGLE_PRODUCT_FETCH,
  SINGLE_PRODUCT_ADD,
} from "../types/products";

export const createProductsFetchAction = () => ({
  type: PRODUCTS_FETCH,
  payload: {},
});

export const createSingleProductFetchAction = (id) => ({
  type: SINGLE_PRODUCT_FETCH,
  payload: {
    id,
  },
});

export const createProductsAddAction = (products) => ({
  type: PRODUCTS_ADD,
  payload: {
    products,
  },
});

export const createSingleProductAddAction = (product) => ({
  type: SINGLE_PRODUCT_ADD,
  payload: {
    product,
  },
});

export const createProductsFetchErrorAction = (error) => ({
  type: PRODUCTS_FETCH_ERROR,
  payload: {
    error,
  },
});
