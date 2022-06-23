import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart(props) {
  return (
    <div className="shopping-cart">
      {
        props.shoppingCart.map((item, indx) => (
          // change itemId to item name
          <div className="cart">
            <p className="cart-product-name" key={item.itemId}>
              item.itemId
            </p>
            <p className="cart-product-quantity" key={item.itemId}>
              item.quantity
            </p>
          </div>
        ))(props.shoppingCart.length == 0) ? (
          <p className="notification">
            No items added to cart yet. Start shopping now!
          </p>
        ) : null
        // Taxes blah blah blah
      }
    </div>
  );
}
