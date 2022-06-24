import * as React from "react";
import "./ShoppingCart.css";
// import * as Math from 'mathjs'

export default function ShoppingCart(props) {
  const totalP = 0;
  // var currentIds = [];
  // var currentQ = [];
  var names = [];
  // var subTotal = 0;
  // var str_price = props.price + '00'
  // var styled_price = Math.round((parceFloat(str_price) + Number.EPSILON) * 100) / 100

  // function styleNum(num) {
  //   // var str_num = num.toString()
  //   // var f_num = parseFloat(str_num)
  //   // console.log("str_num" + str_num)
  //   return(
  //     num.toFixed(2)
  //     // Math.round((f_num + Number.EPSILON) * 100) / 100
  //   )
  // }

  function findName(id) {
      var product = props.products.find((item) => item.id == id)
      return(
          product.name
      )
  }
  // function findPrice(id) {
  //   var product = props.products.find((item) => item.id == id)
  //   return (
  //     product.price
  //   )
  // }
  // props.shoppingCart.map((item,indx) => (
  //   subTotal += findPrice(item.itemId)
  // ))

  console.log("price here:" + props.price);

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
      {/* // Taxes blah blah blah */}
    </div>
  );
}
