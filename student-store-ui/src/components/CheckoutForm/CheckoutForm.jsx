import * as React from "react";
import "./CheckoutForm.css";
import Receipt from "../Receipt/Receipt";

export default function CheckoutForm(props) {
  const [clicked, setClicked] = React.useState(false);

  const handleCheckout = () => {
    props.handleOnSubmitCheckoutForm();
    setClicked(true);
  };

  const handleCheckoutFormChange = (event) => {
    var inpt = event.target.value;
    if (inpt.includes("@")) {
      props.handleOnCheckoutFormChange(props.checkoutForm.name, inpt);
    } else {
      props.handleOnCheckoutFormChange(inpt, props.checkoutForm.value);
    }
  };

  if (clicked) {
    return (
      <div className="checkout-form">
        {/* emails and stuff */}
        <input
          onChange={handleCheckoutFormChange}
          className="checkout-form-input"
          type="email"
          name="email"
          placeholder="student@codepath.org"
          defaultValue={props.checkoutForm.value}
        ></input>
        <input
          onChange={handleCheckoutFormChange}
          className="checkout-form-input"
          type="text"
          name="name"
          placeholder="Student Name"
          defaultValue={props.checkoutForm.name}
        ></input>
        <button onClick={handleCheckout} className="checkout-button">
          Checkout
        </button>
        {props.success ? (
          ((<p className="success">Success!</p>),
          (<p>Receipt for {props.checkoutForm.name}:</p>),
          (
            <Receipt
              price={props.receiptPrice}
              isOpen={props.isOpen}
              products={props.products}
              shoppingCart={props.receiptList}
            ></Receipt>
          ))
        ) : (
          <p className="error">
            We are sorry we could not load your checkout information at this
            time. :(
          </p>
        )}
      </div>
    );
  } else {
    return (
      <div className="checkout-form">
        {/* emails and stuff */}
        <input
          onChange={handleCheckoutFormChange}
          className="checkout-form-input"
          type="email"
          name="email"
          placeholder="student@codepath.org"
          defaultValue={props.checkoutForm.value}
        ></input>
        <input
          onChange={handleCheckoutFormChange}
          className="checkout-form-input"
          type="text"
          name="name"
          placeholder="Student Name"
          defaultValue={props.checkoutForm.name}
        ></input>
        <button onClick={handleCheckout} className="checkout-button">
          Checkout
        </button>
      </div>
    );
  }
}
