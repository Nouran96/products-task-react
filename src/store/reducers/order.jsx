const {
  ADD_PRODUCT_TO_ORDER,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  DELETE_PRODUCT_FROM_ORDER,
} = require("../types/order");

const INITIAL_STATE = {
  products: JSON.parse(localStorage.getItem("cartProducts")) || [],
};

// Add Product
const addProductToOrder = (state, action) => {
  let newProducts;

  if (action.payload.product.quantity) {
    newProducts = [
      ...state.products.filter((pro) => pro.id !== action.payload.product.id),
      { ...action.payload.product },
    ];
  } else {
    newProducts = [
      ...state.products.filter((pro) => pro.id !== action.payload.product.id),
      { ...action.payload.product, quantity: 1 },
    ];
  }

  localStorage.setItem("cartProducts", JSON.stringify(newProducts));

  return {
    products: newProducts,
  };
};

// Delete Product
const deleteProductFromOrder = (state, action) => ({
  products: state.products.filter(
    (product) => product.id !== action.payload.id
  ),
});

// Increment Product
const incrementQuantity = (state, action) => {
  const product = state.products.find(
    (product) => product.id === action.payload.id
  );

  const productIndex = state.products.indexOf(product);

  product.quantity = ++product.quantity;

  const newProducts = [
    ...state.products.slice(0, productIndex),
    { ...product },
    ...state.products.slice(productIndex + 1),
  ];

  localStorage.setItem("cartProducts", JSON.stringify(newProducts));

  return {
    products: newProducts,
  };
};

// Decrement Product
const decrementQuantity = (state, action) => {
  const product = state.products.find(
    (product) => product.id === action.payload.id
  );

  const productIndex = state.products.indexOf(product);

  if (product.quantity > 1) product.quantity = --product.quantity;

  const newProducts = [
    ...state.products.slice(0, productIndex),
    { ...product },
    ...state.products.slice(productIndex + 1),
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
    case DELETE_PRODUCT_FROM_ORDER:
      return deleteProductFromOrder(state, action);
    case INCREMENT_QUANTITY:
      return incrementQuantity(state, action);
    case DECREMENT_QUANTITY:
      return decrementQuantity(state, action);
    default:
      return state;
  }
};

export default orderReducer;
