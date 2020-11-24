import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import avatar from "../../assets/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { connect } from "react-redux";
import {
  createIncrementQuantityAction,
  createDecrementQuantityAction,
  createDeleteProductFromOrderAction,
} from "../../store/actions/order";
import { Link } from "react-router-dom";

const Header = ({
  selectedProducts,
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
}) => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <Link className="navbar-brand" to="/">
        Products List
      </Link>

      <ul className="navbar-nav flex-row">
        <Dropdown className="mr-3">
          <Dropdown.Toggle variant="light">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Dropdown.Toggle>

          <Dropdown.Menu className="selected-products-menu">
            {selectedProducts && selectedProducts.length > 0 ? (
              <React.Fragment>
                <Dropdown.Header>Your Selected Products</Dropdown.Header>
                {selectedProducts.map((product) => (
                  <div key={product.id} className="px-4 py-3 product-item">
                    <div className="d-flex flex-wrap justify-content-between">
                      <span className="mr-3 product-title">
                        {product.title} ({product.quantity})
                      </span>
                      <div className="buttons-container d-flex justify-content-lg-end justify-content-center flex-grow-1">
                        <button
                          onClick={(e) => incrementQuantity(product.id)}
                          className="quantity-btn btn btn-dark btn-sm mr-3"
                        >
                          +
                        </button>
                        <button
                          onClick={(e) => decrementQuantity(product.id)}
                          className="quantity-btn btn btn-dark btn-sm mr-3"
                        >
                          -
                        </button>
                        <button
                          onClick={(e) => deleteProduct(product.id)}
                          className="quantity-btn btn btn-danger btn-sm mr-3"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ) : (
              <Dropdown.Header className="text-center">
                No Products in Cart
              </Dropdown.Header>
            )}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="light">
            <img className="img-fluid" src={avatar} alt="Profile Image" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>View/ Edit Profile</Dropdown.Item>
            <Dropdown.Item className="signout">Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  incrementQuantity: (id) => dispatch(createIncrementQuantityAction(id)),
  decrementQuantity: (id) => dispatch(createDecrementQuantityAction(id)),
  deleteProduct: (id) => dispatch(createDeleteProductFromOrderAction(id)),
});

const mapStateToProps = ({ orderState }) => ({
  selectedProducts: orderState.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
