import { PRODUCTS_FETCH, PRODUCTS_ADD } from "../types/products";

export const createProductsFetchAction = () => ({
  type: PRODUCTS_FETCH,
  payload: {},
});

export const createProductsAddAction = (products) => ({
  type: PRODUCTS_ADD,
  payload: {
    products,
  },
});
