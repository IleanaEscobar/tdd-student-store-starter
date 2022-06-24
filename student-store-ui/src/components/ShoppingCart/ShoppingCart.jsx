import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart(props) {
    const totalP = 0
    const currentId = ''
    const currentQ = 0
    const name = ''

    props.shoppingCart.map((item, indx) => (
        currentId = item.itemId,
        currentQ = item.quantity
    ))

    props.products.map((item, indx) => (
        totalP += (currentQ * item.price)
        (item.id == currentId)? (name = item.name) : (null)
    ))

  return (
    <div className="shopping-cart">
        <div className="cart">
        <p className="cart-product-name" key={currentId}>{name}</p>
        <p className="cart-product-quantity" key={currentId}>
          {currentQ}
        </p>
      </div>
      {
        (props.shoppingCart.length == 0) ? (
          <p className="notification">
            No items added to cart yet. Start shopping now!
          </p>
        ) : null
        }
        {/* // Taxes blah blah blah */}
    </div>
  );
}
