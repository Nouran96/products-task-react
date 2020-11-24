import {
  ADD_PRODUCT_TO_ORDER,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "../types/order";

export const createAddProductToOrderAction = (id) => ({
  type: ADD_PRODUCT_TO_ORDER,
  payload: {
    id,
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
