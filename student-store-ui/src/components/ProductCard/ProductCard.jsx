import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {

    const getQuantity = () => {
        for (let i = 0; i < props.shoppingCart.length; i++) {
            if (props.shoppingCart[i].itemId == props.product.id) {
                return props.shoppingCart[i].quantity;
            }
        }
        return 0;
    };

  return (
    <div>
      <p className="product-name">{props.product.name}</p>
      {/* remember to format price later */}
      <p className="product-price">{props.product.price}</p>
      {props.showDescription ? (
        <p className="product-description">{props.product.description}</p>
      ) : null}
      {/* link might need : */}
      <div className="media">
        <Link to={"/products/" + props.product.id}>
          <img src={props.product.image} alt="product image" />
        </Link>
      </div>
      <button
        onClick={() => props.handleAddItemToCart(props.product.id)}
        className="add"
      >
        +
      </button>
      <button
        onClick={() => props.handleRemoveItemToCart(props.product.id)}
        className="remove"
      >
        -
      </button>
      {
        (getQuantity() > 0)?
        (<p className="product-quantity" >{getQuantity()}</p>) : null
      }
    </div>
  );
}
