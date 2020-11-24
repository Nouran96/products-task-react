import React, { Component } from "react";
import { createProductsFetchAction } from "../../store/actions/products";
import { connect } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

class ProductsList extends Component {
  componentDidMount() {
    this.props.onFetchingProducts();
  }

  render() {
    const { products, fetching, error } = this.props;
    return (
      <div className="container-fluid mt-5 d-flex flex-wrap justify-content-center">
        {fetching ? (
          <p className="text-center">Fetching...</p>
        ) : error ? (
          <p className="text-center">Something went wrong</p>
        ) : products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center">No Products Available</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productsState.products,
  fetching: state.productsState.fetching,
  error: state.productsState.error,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchingProducts: () => dispatch(createProductsFetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
