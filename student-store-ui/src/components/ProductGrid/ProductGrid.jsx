import * as React from "react"
import "./ProductGrid.css"

export default function ProductGrid(props) {
    return (
        <div className="product-grid">
            {
            props.products.map((product, indx) => (
                {/* product card stuff */}
            ))
            }
        </div>
    )
}
