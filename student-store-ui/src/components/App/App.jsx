import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import { BrowserRouter, Routes, Route, renderMatches } from "react-router-dom";
import axios from "axios";

const URL = "https://codepath-store-api.herokuapp.com/store";

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [success, setSuccess] = React.useState();
  const [categoryClicked, setCategoryClicked] = React.useState(false);
  const [currentCat, setCurrentCat] = React.useState();
  // const [inCart, setInCart] = React.useState(false)
  //   The itemId field should store the id of the item being purchased.
  //   The quantity field should store a number representing how many of that item the user is purchasing.
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState({
    name: "Fake Name",
    value: "example@email.com",
  });

  React.useEffect(() => {
    try {
      async function fetchData() {
        const response = await axios(URL);
        console.log(response.data.products);
        setProducts(response.data.products);
      }

      fetchData();
    } catch {
      setError(
        "We are sorry, we are haaving some difficulties loading the page right now :(."
      );
    }
  }, []);

  function handleOnToggle() {
    setIsOpen(isOpen ? false : true);
  }

  function handleCategoryChange(cat) {
    if (cat != 'all categories') {
      setCategoryClicked(true);
      setCurrentCat(cat);
    }
    else{
      setCategoryClicked(false);
    }
  }

  // Add price

  function handleAddItemToCart(productId) {
    let quantity = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        quantity = shoppingCart[i].quantity;
      }
    }

    if (quantity == 0) {
      setShoppingCart((prev) => [
        ...prev,
        {
          itemId: productId,
          quantity: 1,
        },
      ]);
    } else {
      let aux = [];
      for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].itemId != productId) {
          aux.push(shoppingCart[i]);
        } else {
          aux.push({
            itemId: productId,
            quantity: shoppingCart[i].quantity + 1,
          });
        }
      }

      setShoppingCart(aux);
    }
  }

  function handleRemoveItemFromCart(productId) {
    let quantity = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        quantity = shoppingCart[i].quantity;
      }
    }

    if (quantity == 1) {
      setShoppingCart(shoppingCart.filter((item) => item.itemId != productId));
    } else {
      let aux = [];
      for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].itemId != productId) {
          aux.push(shoppingCart[i]);
        } else {
          aux.push({
            itemId: productId,
            quantity: shoppingCart[i].quantity - 1,
          });
        }
      }
      setShoppingCart(aux);
    }
  }

  function handleOnCheckoutFormChange(name, value) {
    setCheckoutForm({ name: name, value: value });
    console.log("checkOut = " + checkoutForm.name + " " + checkoutForm.value);
  }

  async function handleOnSubmitCheckoutForm() {
    console.log(checkoutForm.value);
    try {
      await axios.post(URL, {
        user: { name: checkoutForm.name, email: checkoutForm.value },
        shoppingCart: shoppingCart,
      });
      setShoppingCart([]);
      setCheckoutForm({ name: "", value: 0 });
      setSuccess(true);
      // return(
      //   <p className="success">Success!</p>
      // )
    } catch (e) {
      console.log(e);
      console.log("error");
    }
    // return <p className="error">We're sorry we had trouble loading your checkout:(.</p>
  }

  // async function handleSearch() {
  //   try {

  //   }
  // }
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          {/* <ProductDetail/> */}
          <Navbar />
          <Sidebar
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle}
            success={success}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  currentCat={currentCat}
                  categoryClicked={categoryClicked}
                  handleCategoryChange={handleCategoryChange}
                  shoppingCart={shoppingCart}
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemFromCart}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemFromCart}
                />
              }
            />
            {/* <NotFound/> */}
            <Route
              path="*"
              element={
                ((<NotFound />),
                (<Navbar />),
                (
                  <Sidebar
                    // handleSearch={handleSearch}
                    isOpen={isOpen}
                    shoppingCart={shoppingCart}
                    products={products}
                    checkoutForm={checkoutForm}
                    handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    handleOnSubmitCheckoutFrom={handleOnSubmitCheckoutForm}
                    handleOnToggle={handleOnToggle}
                  />
                ))
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
