import * as React from "react";
import "./Receipt.css";
// import * as Math from 'mathjs'

export default function Receipt(props) {
    console.log("receipt stuff:" + props.products)
  const totalP = 0;
  var names = [];
  function findName(id) {
      var product = props.products.find((item) => item.id == id)
      return(
          product.name
      )
  }

  console.log("price here:" + props.price);

  return (
    <div className="receipt">
      <div className="cart">
          <p id="receipt-header">Receipt:</p>
          {
              props.shoppingCart.map((product, indx) => (
            <div className="product-display" key={product.itemId}>
            <p className="cart-product-name">
            {findName(product.itemId)}
              </p>
              <p className="receipt-quantity">
              : {product.quantity}
              </p>
              </div>
              ))
          }
      </div>
      <p className="subTotal: ">
        Subtotal: ${props.price.toFixed(2)}
      </p>
      <p className="total">
        Total: ${(props.price + (props.price*0.0875)).toFixed(2)}
      </p>
    </div>
  );
}
