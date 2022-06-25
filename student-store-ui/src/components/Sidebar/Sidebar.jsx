import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar(props) {
  return (
    <section className="sidebar">
      <button
        onClick={props.handleOnToggle}
        className="toggle-button"
        width="150"
      >
        Sidebar
      </button>
      {props.isOpen ? (
        <div className="forms">
          <ShoppingCart
            price={props.price}
            isOpen={props.isOpen}
            products={props.products}
            shoppingCart={props.shoppingCart}
          ></ShoppingCart>
          <CheckoutForm
            receiptPrice={props.receiptPrice}
            products={props.products}
            receiptList={props.receiptList}
            price={props.price}
            isOpen={props.isOpen}
            shoppingCart={props.shoppingCart}
            checkoutForm={props.checkoutForm}
            handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
            success={props.success}
          ></CheckoutForm>
        </div>
      ) : null}
    </section>
  );
}
