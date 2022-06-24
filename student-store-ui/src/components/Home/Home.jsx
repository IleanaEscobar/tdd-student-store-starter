import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import { Link } from "react-router-dom";

export default function Home(props) {
  // console.table(props.shoppingCart);
  var categories = new Set();
  props.products.map((item, indx) => categories.add(item.category));
  var arr_cat = Array.from(categories);
  arr_cat.push('all categories')

  return (
    <div className="home">
      <Hero></Hero>
      <div className="cat-buttons">
        {arr_cat.map((item, indx) => (
          <button
            onClick={() => {
              props.handleCategoryChange(item);
            }}
            className="catButton"
            key={item}
            width="100"
          >
            {item}
          </button>
        ))}
      </div>
      {props.categoryClicked ? (
        <ProductGrid
          shoppingCart={props.shoppingCart}
          products={props.products.filter(
            (item) => item.category == props.currentCat
          )}
          handleAddItemToCart={props.handleAddItemToCart}
          handleRemoveItemToCart={props.handleRemoveItemToCart}
        ></ProductGrid>
      ) : (
        <ProductGrid
          shoppingCart={props.shoppingCart}
          products={props.products}
          handleAddItemToCart={props.handleAddItemToCart}
          handleRemoveItemToCart={props.handleRemoveItemToCart}
        ></ProductGrid>
      )}
    </div>
  );
}
