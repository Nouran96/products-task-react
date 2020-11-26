import React, { Component } from "react";
import { connect } from "react-redux";
import { createSingleProductFetchAction } from "../../store/actions/products";
import { createAddProductToOrderAction } from "../../store/actions/order";
import { getProductQuantity } from "../../store/selectors/order";
import ActionButton from "../../components/ActionButton/ActionButton";
import "./ProductDetails.scss";

class ProductDetails extends Component {
  state = {
    quantity: 0,
  };

  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
    this.setState({ quantity: this.props.quantity });
  }

  incrementQuantity = () => {
    this.setState({ quantity: ++this.state.quantity });
  };

  decrementQuantity = () => {
    this.setState({ quantity: --this.state.quantity });
  };

  render() {
    const { product, fetching, error, addProductToCart } = this.props;
    return (
      <div className="container mt-5">
        {fetching ? (
          <p className="text-center">Fetching...</p>
        ) : error ? (
          <p className="text-center">Something went wrong</p>
        ) : product ? (
          <div className="d-flex flex-wrap justify-content-center">
            <div className="product-image mr-lg-5 mr-0">
              <img
                className="img-fluid h-100"
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="product-body d-flex flex-column justify-content-between mt-5">
              <div className="d-flex flex-column">
                <h2>{product.title}</h2>
                <span className="mb-3">{product.category}</span>
                <h3 className="product-price">${product.price}</h3>
              </div>
              <div className="d-flex flex-column flex-grow-1 justify-content-around">
                <div className="product-quantity-container d-flex align-items-baseline">
                  <h5 className="mr-3">Quantity: </h5>
                  <ActionButton
                    label="+"
                    variant="dark"
                    className="quantity-btn mr-3"
                    onClick={() => this.incrementQuantity()}
                  />
                  <span className="product-quantity mr-3">
                    {this.state.quantity}
                  </span>
                  <ActionButton
                    label="-"
                    variant="dark"
                    className="quantity-btn mr-3"
                    onClick={() => this.decrementQuantity()}
                  />
                </div>
                <ActionButton
                  label="Add to Cart"
                  variant="primary"
                  onClick={() => {
                    if (product.quantity !== this.state.quantity) {
                      product.quantity = this.state.quantity;
                      addProductToCart(product);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">No Products Available</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ productsState, orderState }, props) => ({
  product: productsState.product,
  quantity: getProductQuantity(orderState, props.match.params.id),
  fetching: productsState.fetching,
  error: productsState.error,
});

const mapDispatchToProps = (dispatch) => ({
  getProduct: (id) => dispatch(createSingleProductFetchAction(id)),
  addProductToCart: (product) =>
    dispatch(createAddProductToOrderAction(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
