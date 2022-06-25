import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home(props) {
  var categories = new Set();
  props.products.map((item, indx) => categories.add(item.category));
  var arr_cat = Array.from(categories);
  arr_cat.push("all categories");
  const [usedProducts, setUsedProducts] = React.useState(props.products);
  const [categoryClicked, setCategoryClicked] = React.useState(false);
  const [currentCat, setCurrentCat] = React.useState("all categories");

  function handleCategoryChange(cat) {
    setCurrentCat(cat);
    setCategoryClicked(cat != "all categories");
  }

  React.useEffect(() => {
    if (categoryClicked) {
      setUsedProducts(
        props.products.filter((item) => item.category == currentCat)
      );
    } else {
      setUsedProducts(props.products);
    }
  }, [currentCat]);

  const handleSearchChange = (event) => {
    var inpt = event.target.value;
    setUsedProducts(
      props.products.filter(
        (item) => item.name.substring(0, inpt.length) == inpt
      )
    );
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
              handleCategoryChange(item);
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
