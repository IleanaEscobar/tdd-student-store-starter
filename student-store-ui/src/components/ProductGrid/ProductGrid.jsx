import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
  return (
    <div className="product-grid">
      {props.products.map((product, indx) => {
        return (
          <React.Fragment key={indx}>
            <ProductCard
              shoppingCart={props.shoppingCart}
              handleAddItemToCart={props.handleAddItemToCart}
              handleRemoveItemToCart={props.handleRemoveItemToCart}
              showDescription={false}
              product={product}
              key={product.id}
            ></ProductCard>
          </React.Fragment>
        );
      })}
    </div>
  );
}
