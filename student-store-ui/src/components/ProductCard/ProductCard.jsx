import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard(props) {
    return (
        <div>
            <p className="product-name">{props.product.name}</p>
            {/* remember to format price later */}
            <p className="product-price">{props.product.price}</p>
            {
            (props.showDescription)?
            (<p className="product-description">{props.product.description}</p>)  : (null)
            }
            {/* link might need : */}
            <div className="media">
            <Link to={"/products/" + props.product.id}>
            <img src={props.product.image} alt="product image"/>
            </Link>
            </div>
            <button onClick={props.handleAddItemToCart} className="add"></button>
            <button onClick={props.handleRemoveItemFromCart} className="remove"></button>
            {(props.product.quantity > 0) ?
            (<p className="product-quantity">{props.product.quantity}</p>) : (null)}
        </div>
    )
}
