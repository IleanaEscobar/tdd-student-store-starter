import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart(props) {

  function findName(id) {
      var product = props.products.find((item) => item.id == id)
      return(
          product.name
      )
  }

  return (
    <div className="shopping-cart">
      <div className="cart">
          <p id="shopping-cart-header">Shopping Cart:</p>
          {
              props.shoppingCart.map((product, indx) => (
            <div className="product-display" key={product.itemId}>
            <p className="cart-product-name">
            {findName(product.itemId)}
              </p>
              <p className="cart-product-quantity">
              : {product.quantity}
              </p>
              </div>
              ))
          }
      </div>
      {props.shoppingCart.length == 0 ? (
        <p className="notification">
          No items added to cart yet. Start shopping now!
        </p>
      ) : null}
      <p className="subTotal: ">
        Subtotal: ${props.price.toFixed(2)}
      </p>
      <p className="total">
        Total: ${(props.price + (props.price*0.0875)).toFixed(2)}
      </p>
    </div>
  );
}
