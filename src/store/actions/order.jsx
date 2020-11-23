import { ADD_PRODUCT_TO_ORDER } from "../types/order";

export const createAddProductToOrderAction = (id) => ({
  type: ADD_PRODUCT_TO_ORDER,
  payload: {
    id,
  },
});
