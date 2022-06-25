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
  // const [searchClicked, setSearchClicked] = React.useState(false);
  // const [currentSearch, setCurrentSearch] = React.useState("default");
  const [success, setSuccess] = React.useState();
  const [categoryClicked, setCategoryClicked] = React.useState(false);
  const [currentCat, setCurrentCat] = React.useState();
  const [price, setPrice] = React.useState(0);
  const [receiptList, setReceiptList] = React.useState([])
  const [receiptPrice, setReceiptPrice] = React.useState(0)
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

  // function handleSearchChange(search) {
  //   if (search != "default") {
  //     setSearchClicked(true);
  //     setCurrentSearch(search);
  //   } else {
  //     setSearchClicked(false);
  //   }
  // }

  function handleCategoryChange(cat) {
    if (cat != "all categories") {
      setCategoryClicked(true);
      setCurrentCat(cat);
    } else {
      setCategoryClicked(false);
    }
  }

  // Add price

  function handleAddItemToCart(productId) {
    var product = products.find((item) => item.id == productId);
    console.log("price " + price);
    setPrice(price + product.price);
    console.log("price " + price);
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
    var product = products.find((item) => item.id == productId);
    let quantity = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        quantity = shoppingCart[i].quantity;
      }
    }

    if (quantity == 1) {
      setPrice(price - product.price);
      setShoppingCart(shoppingCart.filter((item) => item.itemId != productId));
    } else {
      if (quantity > 1) {
        setPrice(price - product.price);
      }
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

  // important :)
  if(products.length==0) {
    return <div>Loading...</div>
  }

  async function handleOnSubmitCheckoutForm() {
    console.log(checkoutForm.value);
    try {
      await axios.post(URL, {
        user: { name: checkoutForm.name, email: checkoutForm.value },
        shoppingCart: shoppingCart,
      });
      var s = shoppingCart
      var p = price
      setReceiptList(s)
      setReceiptPrice(p)
      setPrice(0)
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
            receiptList={receiptList}
            receiptPrice={receiptPrice}
            price={price}
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
                  // handleSearchChange={handleSearchChange}
                  // searchClicked={searchClicked}
                  // currentSearch={currentSearch}
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
                  receiptList={receiptList}
                  receiptPrice={receiptPrice}
                  price={price}
                  isOpen={isOpen}
                  shoppingCart={shoppingCart}
                  products={products}
                  checkoutForm={checkoutForm}
                  handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                  handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                  handleOnToggle={handleOnToggle}
                  success={success}
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
