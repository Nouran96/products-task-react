import { createProductsFetchAction } from "../../store/actions/products";
import { connect } from "react-redux";

const ProductsList = ({ products, onFetchingProducts }) => {
  return (
    <div>
      <button onClick={onFetchingProducts}>Click to fetch</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchingProducts: () => dispatch(createProductsFetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
