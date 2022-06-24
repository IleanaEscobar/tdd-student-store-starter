import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar(props) {
  return (
    <section className="sidebar">
      {/* <p>Sidebar</p> */}
      <button
        onClick={props.handleOnToggle}
        className="toggle-button"
        width="150"
      >
        Sidebar
      </button>
      {props.isOpen == true
        ? (
          <div>
            <ShoppingCart
              isOpen={props.isOpen}
              products={props.products}
              shoppingCart={props.shoppingCart}
            ></ShoppingCart>
            <CheckoutForm
              isOpen={props.isOpen}
              shoppingCart={props.shoppingCart}
              checkoutForm={props.checkoutForm}
              handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
              handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
              success={props.success}
            ></CheckoutForm>
            </div>
          )
        : null}
    </section>
  );
}
