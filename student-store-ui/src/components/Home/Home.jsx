import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home(props) {
  return (
    <div className="home">
      <p>Home</p>
      <Hero></Hero>
      <ProductGrid products={props.products} handleAddItemToCart = {props.handleAddItemToCart} handleRemoveItemToCart = {props.handleRemoveItemToCart}></ProductGrid>
    </div>
  )
}
