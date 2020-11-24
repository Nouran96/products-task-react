const { ADD_PRODUCT_TO_ORDER } = require("../types/order");

const INITIAL_STATE = {
  products: localStorage.getItem("cartProducts") || [],
};

const addProductToOrder = (state, action) => {
  const newProducts = [...state.products, action.payload.id];

  localStorage.setItem("cartProducts", newProducts);

  //   Return only unique ids and prevent duplicates
  return {
    products: [...new Set(newProducts)],
  };
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_ORDER:
      return addProductToOrder(state, action);
    default:
      return state;
  }
};

export default orderReducer;
