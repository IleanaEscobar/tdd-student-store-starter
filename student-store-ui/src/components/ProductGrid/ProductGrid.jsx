import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
    return (
        <div className="product-grid">
            {
            props.products.map((product, indx) => (
                <ProductCard showDescription={false} product={product} key={product.id}></ProductCard>
            ))
            }
        </div>
    )
}
