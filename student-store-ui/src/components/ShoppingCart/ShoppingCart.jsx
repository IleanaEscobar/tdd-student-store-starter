import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart(props) {
  const totalP = 0;
  var currentIds = [];
  var currentQ = [];
  var names = [];

  props.shoppingCart.map(
    (item, indx) => (currentIds.push(item.itemId), currentQ.push(item.quantity))
  );
  props.products.map((item, indx) => {
    for (let i = 0; i < props.shoppingCart.length; i++) {
      item.id == currentIds[i] ? names.push(item.name) : null;
    }
  });
  console.log(names);

  return (
    <div className="shopping-cart">
      <div className="cart">
        {names.map((name, indx) => (
            (currentQ[indx] > 0)?(<p className="cart-product-name" key={indx}>
            {name}
          </p>): null
        ))}
        {currentQ.map((q, indx) => (
            (q > 0)? (<p className="cart-product-quantity" key={indx}>
            Items amount: {q}
          </p>): null
        ))}
      </div>
      {props.shoppingCart.length == 0 ? (
        <p className="notification">
          No items added to cart yet. Start shopping now!
        </p>
      ) : null}
      {/* // Taxes blah blah blah */}
    </div>
  );
}
