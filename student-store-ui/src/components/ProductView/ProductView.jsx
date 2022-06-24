import * as React from "react"
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props) {
    return (
        <div className="product-view">
            <h1 className="product-id">{"Product #" + props.productId}</h1>
            <ProductCard product={props.product} productId = {props.productId} quantity={props.quantity} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemToCart={props.handleRemoveItemToCart} showDescription={true}></ProductCard>
        </div>
    )
}
