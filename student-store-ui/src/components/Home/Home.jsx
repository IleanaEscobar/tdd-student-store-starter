import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import { Link } from "react-router-dom";

export default function Home(props) {
  console.log("props: " + props.products)
  // console.table(props.shoppingCart);
  var categories = new Set();
  props.products.map((item, indx) => categories.add(item.category));
  var arr_cat = Array.from(categories);
  arr_cat.push("all categories");
  const [usedProducts, setUsedProducts] = React.useState(props.products);

  if (props.categoryClicked) {
    setUsedProducts(props.products.filter(
      (item) => item.category == props.currentCat
    ))
  }
  // props.handleSearchChange
  const handleSearchChange = (event) => {
    var inpt = event.target.value;
    setUsedProducts(props.products.filter(
      (item) => item.name.substring(0, inpt.length) == inpt
    ))
  };

  return (
    <div className="home">
      <Hero></Hero>
      <div>
        <input
          onChange={handleSearchChange}
          type="search"
          placeholder="Search..."
          defaultValue={""}
          className="search-bar"
        ></input>
      </div>
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
      <ProductGrid
        shoppingCart={props.shoppingCart}
        products={usedProducts}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemToCart={props.handleRemoveItemToCart}
      ></ProductGrid>
    </div>
  );
}
