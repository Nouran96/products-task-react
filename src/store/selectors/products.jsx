export const getProduct = (state, id) => {
  return state.productsState.products.find((product) => product.id === +id);
};
