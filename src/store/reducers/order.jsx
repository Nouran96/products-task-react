const {
  ADD_PRODUCT_TO_ORDER,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} = require("../types/order");

const INITIAL_STATE = {
  products: JSON.parse(localStorage.getItem("cartProducts")) || [],
};

const addProductToOrder = (state, action) => {
  const newProducts = [
    ...state.products.filter((pro) => pro.id !== action.payload.id),
    { id: action.payload.id, quantity: 1 },
  ];

  localStorage.setItem("cartProducts", JSON.stringify(newProducts));

  return {
    products: newProducts,
  };
};

const incrementQuantity = (state, action) => {
  const product = state.products.find(
    (product) => product.id === action.payload.id
  );

  product.quantity = ++product.quantity;

  const newProducts = [
    ...state.products.filter((pro) => pro.id !== product.id),
    { ...product },
  ];

  localStorage.setItem("cartProducts", JSON.stringify(newProducts));

  return {
    products: newProducts,
  };
};

const decrementQuantity = (state, action) => {
  const product = state.products.find(
    (product) => product.id === action.payload.id
  );

  if (product.quantity > 1) product.quantity = --product.quantity;

  const newProducts = [
    ...state.products.filter((pro) => pro.id !== product.id),
    { ...product },
  ];

  localStorage.setItem("cartProducts", JSON.stringify(newProducts));

  return {
    products: newProducts,
  };
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_ORDER:
      return addProductToOrder(state, action);
    case INCREMENT_QUANTITY:
      return incrementQuantity(state, action);
    case DECREMENT_QUANTITY:
      return decrementQuantity(state, action);
    default:
      return state;
  }
};

export default orderReducer;
