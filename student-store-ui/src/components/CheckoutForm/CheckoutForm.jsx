import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm(props) {
    const [clicked, setClicked] = React.useState(false)

    const handleCheckout = () => {
        props.handleOnSubmitCheckoutForm();
        setClicked(true)

    }

    if(clicked) {
        return(

            <div className="checkout-form">
                {/* emails and stuff */}
                <input onChange={props.handleOnCheckoutFormChange} className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org" defaultValue={props.checkoutForm.email}></input>
                <input onChange={props.handleOnCheckoutFormChange} className="checkout-form-input" type="text" name="name" placeholder="Student Name" defaultValue={props.checkoutForm.name}></input>
                <button onClick={handleCheckout} className="checkout-button">Checkout</button>
                {(props.success)? (<p className="success">Success!</p>) :(< p className="error">We are sorry we could not load your checkout information at this time. :(</p>)
                }
            </div>
        )
    }
    else{
        return(

            <div className="checkout-form">
                {/* emails and stuff */}
                <input onChange={props.handleOnCheckoutFormChange} className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org" defaultValue={props.checkoutForm.email}></input>
                <input onChange={props.handleOnCheckoutFormChange} className="checkout-form-input" type="text" name="name" placeholder="Student Name" defaultValue={props.checkoutForm.name}></input>
                <button onClick={handleCheckout} className="checkout-button">Checkout</button>
            </div>
        )
    }

}
