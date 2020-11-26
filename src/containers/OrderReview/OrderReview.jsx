import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import "./OrderReview.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import {
  createIncrementQuantityAction,
  createDecrementQuantityAction,
  createDeleteProductFromOrderAction,
} from "../../store/actions/order";
import ActionButton from "../../components/ActionButton/ActionButton";

const OrderReview = ({
  selectedProducts,
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
}) => {
  const calculateTotal = () => {
    // Reduce function takes initial value as the second argument
    return selectedProducts
      .reduce((acc, current) => acc + current.price * current.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Your Order</h2>
      <Table responsive="md">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price Per Item</th>
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
                  <Link to={`products/${product.id}`}>
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
                  </Link>
                </td>
                <td className="product-price">${product.price}</td>
                <td className="product-quantity">
                  <div className="product-quantity-container d-flex align-items-baseline">
                    <ActionButton
                      label="+"
                      variant="dark"
                      className="quantity-btn mr-3"
                      onClick={(e) => incrementQuantity(product.id)}
                    />
                    <span className="product-quantity mr-3">
                      {product.quantity}
                    </span>
                    <ActionButton
                      label="-"
                      variant="dark"
                      className="quantity-btn mr-3"
                      onClick={(e) => decrementQuantity(product.id)}
                    />
                  </div>
                </td>
                <td className="product-price">
                  ${product.quantity * product.price}
                </td>
                <td>
                  <ActionButton
                    variant="danger"
                    className="quantity-btn mr-3"
                    onClick={(e) => deleteProduct(product.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </ActionButton>
                </td>
              </tr>
            ))
          ) : (
            <p className="text-center">No Products in Cart</p>
          )}
        </tbody>
      </Table>

      <div className="d-flex flex-column align-items-end order-total-container my-3">
        <span className="order-total mb-2">Total Price</span>
        <span className="product-price mb-2">${calculateTotal()}</span>
        <Link to="order-form" className="btn btn-sm btn-dark">
          Order Now
        </Link>
      </div>
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
