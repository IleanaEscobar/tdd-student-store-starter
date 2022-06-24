import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home(props) {
  console.table(props.shoppingCart)
  return (
    <div className="home">
      <p>Home</p>
      <Hero></Hero>
      <ProductGrid shoppingCart={props.shoppingCart} products={props.products} handleAddItemToCart = {props.handleAddItemToCart} handleRemoveItemToCart = {props.handleRemoveItemToCart}></ProductGrid>
    </div>
  )
}
