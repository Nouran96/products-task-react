export const isProductInCart = ({ orderState }, id) => {
  return orderState.products.find((product) => product.id === id);
};

export const getProductQuantity = (orderState, id) => {
  const product = orderState.products.find((product) => product.id === +id);

  if (product) return product.quantity;

  return 1;
};
