export const isProductInCart = ({ orderState }, id) => {
  return orderState.products.includes(id);
};
