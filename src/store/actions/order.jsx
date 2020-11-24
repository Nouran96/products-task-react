import {
  ADD_PRODUCT_TO_ORDER,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  DELETE_PRODUCT_FROM_ORDER,
} from "../types/order";

export const createAddProductToOrderAction = (product) => ({
  type: ADD_PRODUCT_TO_ORDER,
  payload: {
    product,
  },
});

export const createIncrementQuantityAction = (id) => ({
  type: INCREMENT_QUANTITY,
  payload: {
    id,
  },
});

export const createDecrementQuantityAction = (id) => ({
  type: DECREMENT_QUANTITY,
  payload: {
    id,
  },
});

export const createDeleteProductFromOrderAction = (id) => ({
  type: DELETE_PRODUCT_FROM_ORDER,
  payload: {
    id,
  },
});
