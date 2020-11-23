import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <Link to="/" className="product-card d-flex m-3">
      <div className="card flex-grow-1">
        <img
          className="card-img-top img-fluid product-image p-2"
          src={product.image}
          alt={product.title}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="d-flex flex-column mb-2">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{product.title}</h5>
              <span className="card-text ml-2 product-price">
                ${product.price}
              </span>
            </div>

            <p className="card-text">{product.category}</p>
          </div>
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
