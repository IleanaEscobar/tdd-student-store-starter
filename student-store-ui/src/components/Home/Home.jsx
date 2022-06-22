import * as React from "react"
import "./Home.css"

export default function Home(props) {
  return (
    <div className="home">
      <p>Home</p>
      <Hero></Hero>
      <ProductGrid products={props.products} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart}></ProductGrid>
    </div>
  )
}
