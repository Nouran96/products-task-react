import React, { Component } from "react";
import { connect } from "react-redux";
import { getProduct } from "../../store/selectors/products";
import { createSingleProductFetchAction } from "../../store/actions/products";

class ProductDetails extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    const { product, fetching, error } = this.props;
    return (
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        {fetching ? (
          <p className="text-center">Fetching...</p>
        ) : error ? (
          <p className="text-center">Something went wrong</p>
        ) : product ? (
          <div>{product.title}</div>
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
