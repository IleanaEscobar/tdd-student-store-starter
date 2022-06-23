import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import "./App.css"
import { BrowserRouter, Routes, Route, renderMatches } from "react-router-dom"
import axios from 'axios'

const URL = 'https://codepath-store-api.herokuapp.com/store'

export default function App() {
  const [products, setProducts] = React.useState([])
  const [isFetching, setIsFetching] = React.useState(false)
  const [error, setError] = React.useState("")
  const [isOpen, setIsOpen] = React.useState(false)
  const [success, setSuccess] = React.useState()
  // const [inCart, setInCart] = React.useState(false)
  //   The itemId field should store the id of the item being purchased.
  //   The quantity field should store a number representing how many of that item the user is purchasing.
  const [shoppingCart, setShoppingCart] = React.useState([{ itemId: '', quantity: 0 }])
  const [checkoutForm, setCheckoutForm] = React.useState({ name: '', value: 0 })
  // const [totalPrice, setTotalPrice] = React.useState(0)

  React.useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await axios(URL)
        setProducts(data.products)
      }

      fetchData();
    }
    catch {
      setError("We are sorry, we are haaving some difficulties loading the page right now :(.")
    }
  }, [])

  function handleOnToggle() {
    setIsOpen(isOpen ? false : true)
  }

  // Add price

  function handleAddItemToCart(productId) {
    // <div>
    {/* { */ }
    // shoppingCart.map((item, indx) => (
    //   item.quantity += 1
    //   if(item.itemId == pr)
    // (item.itemId == productId) ? (
    //   item.quantity += 1
    //   setInCart(true)
    // ) : (null)
    // ))
    // }
    {/* </div> */ }
    // setShoppingCart([...shoppingCart, productId])
    var count = data.filter(item => item.itemId == productId).length
    if (count > 0) {
      shoppingCart.map((item, indx) => (
        (item.itemId == productId) ?
          (item.quantity += 1) : (null)
      ))
    }
    else {
      newItem = { itemId: productId, quantity: 1 }
      setShoppingCart([...shoppingCart, newItem])
    }
    // products.map((item, indx) => (
    //   (item.id == productId) ?
    //   (setTotalPrice(totalPrice + item.price) ) : (null)
    // ))
  }

  // if (!inCart) {
  //   newItem = {itemId: productId, quantity: 1}
  //   setShoppingCart([...shoppingCart, newItem])
  // }

  function handleRemoveItemFromCart(productId) {
    shoppingCart.map((item, indx) => (
      (item.itemId == productId && item.quantity == 1) ?
        (setShoppingCart([shoppingCart.filter(item => item.itemId != productId)])) : (null)
          (item.itemId == productId && item.quantity > 1) ?
          (item.quantity -= 1) : (null)
    ))
  }

  function handleOnCheckoutFormChange(name, value) {
    setCheckoutForm({ name: name, value: value })
  }

  async function handleOnSubmitCheckoutForm() {
    try {
      await axios.post(URL, {
        user: checkoutForm,
        shoppingCart: shoppingCart
      })
      setShoppingCart([])
      setCheckoutForm({name: '', value: 0})
      setSuccess(true)
      // return(
      //   <p className="success">Success!</p>
      // )
    }
    catch {
      console.log('error')
    }
    // return <p className="error">We're sorry we had trouble loading your checkout:(.</p>

  }
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          {/* <ProductDetail/> */}
          <Navbar />
          <Sidebar isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} handleOnToggle={handleOnToggle} success={success}/>
          <Routes>
            <Route path="/" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart} />} />
            <Route path="/products/:productId" element={<ProductDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart} />} />
            {/* <NotFound/> */}
            <Route path="*" element={<NotFound />, <Navbar />, <Sidebar isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutFrom={handleOnSubmitCheckoutForm} handleOnToggle={handleOnToggle} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

// useEffect(() => {
//   async function fetchData() {
//     // const response = await fetch(URL)
//     // const result = await response.json()
//     // setProducts(result.products)

//     const { data } = await axios(URL)
//     setProducts(data.products)
//   }

//   fetchData();
// }, [name])
