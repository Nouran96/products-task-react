import React, { Component } from "react";
import { connect } from "react-redux";
import { createSingleProductFetchAction } from "../../store/actions/products";
import {
  createIncrementQuantityAction,
  createDecrementQuantityAction,
} from "../../store/actions/order";
import { getProductQuantity } from "../../store/selectors/order";
import "./ProductDetails.scss";

class ProductDetails extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    const {
      product,
      quantity,
      fetching,
      error,
      incrementQuantity,
      decrementQuantity,
    } = this.props;
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
                  <button
                    onClick={() => incrementQuantity(product.id)}
                    className="quantity-btn btn btn-dark btn-sm mr-3"
                  >
                    +
                  </button>
                  <span className="product-quantity mr-3">{quantity}</span>
                  <button
                    onClick={() => decrementQuantity(product.id)}
                    className="quantity-btn btn btn-dark btn-sm mr-3"
                  >
                    -
                  </button>
                </div>
                <button className="btn btn-primary">Add To Cart</button>
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
  incrementQuantity: (id) => dispatch(createIncrementQuantityAction(id)),
  decrementQuantity: (id) => dispatch(createDecrementQuantityAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
