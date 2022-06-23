import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

// expected props == isOpen, shoppingCart, products, checkoutForm, handleOnCheckourFormChange
// , handleOnSubmitCheckoutFrom, handleOnToggle
export default function Sidebar(props) {
  return (
    <section className="sidebar">
      {/* <p>Sidebar</p> */}
      <button onClick={props.handleOnToggle} className="toggle-button" width='150'>Sidebar</button>
      {
      (props.isOpen == true) ?
      (<ShoppingCart isOpen={props.isOpen} products={props.products} shoppingCart={props.shoppingCart}></ShoppingCart>,
      <CheckoutForm isOpen={props.isOpen} shoppingCart={props.shoppingCart} checkoutForm={props.checkoutForm} handleOnCheckoutFromChange={props.handleOnCheckoutFromChange} handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm} success={props.success}></CheckoutForm>) : (null)
      }

    </section>
  )
}
