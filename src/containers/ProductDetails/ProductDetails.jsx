import React, { Component } from "react";
import { connect } from "react-redux";
import { createSingleProductFetchAction } from "../../store/actions/products";
import "./ProductDetails.scss";

class ProductDetails extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    const { product, fetching, error } = this.props;
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
              <div className="d-flex flex-column">
                <span>Quantity: </span>
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

const mapStateToProps = ({ productsState }) => ({
  product: productsState.product,
  fetching: productsState.fetching,
  error: productsState.error,
});

const mapDispatchToProps = (dispatch) => ({
  getProduct: (id) => dispatch(createSingleProductFetchAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
