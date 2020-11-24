import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import "./OrderReview.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  createIncrementQuantityAction,
  createDecrementQuantityAction,
  createDeleteProductFromOrderAction,
} from "../../store/actions/order";

const OrderReview = ({
  selectedProducts,
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
}) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Your Order</h2>
      <Table responsive="md">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts && selectedProducts.length > 0 ? (
            selectedProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="product-image-container">
                      <img
                        className="img-fluid"
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                    <span className="ml-5">{product.title}</span>
                  </div>
                </td>
                <td className="product-price">${product.price}</td>
                <td className="product-quantity">
                  <div className="product-quantity-container d-flex align-items-baseline">
                    <button
                      onClick={(e) => incrementQuantity(product.id)}
                      className="quantity-btn btn btn-dark btn-sm mr-3"
                    >
                      +
                    </button>
                    <span className="product-quantity mr-3">
                      {product.quantity}
                    </span>
                    <button
                      onClick={(e) => incrementQuantity(product.id)}
                      className="quantity-btn btn btn-dark btn-sm mr-3"
                    >
                      -
                    </button>
                  </div>
                </td>
                <td className="product-price">
                  ${product.quantity * product.price}
                </td>
                <td>
                  <button
                    onClick={(e) => deleteProduct(product.id)}
                    className="quantity-btn btn btn-danger btn-sm mr-3"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <p className="text-center">No Products in Cart</p>
          )}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = ({ orderState }) => ({
  selectedProducts: orderState.products,
});

const mapDispatchToProps = (dispatch) => ({
  incrementQuantity: (id) => dispatch(createIncrementQuantityAction(id)),
  decrementQuantity: (id) => dispatch(createDecrementQuantityAction(id)),
  deleteProduct: (id) => dispatch(createDeleteProductFromOrderAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderReview);
