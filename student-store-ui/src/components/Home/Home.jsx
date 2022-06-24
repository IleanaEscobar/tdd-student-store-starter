import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import { Link } from "react-router-dom"

export default function Home(props) {
  console.table(props.shoppingCart)
  return (
    <div className="home">
      <Hero></Hero>
      <ProductGrid shoppingCart={props.shoppingCart} products={props.products} handleAddItemToCart = {props.handleAddItemToCart} handleRemoveItemToCart = {props.handleRemoveItemToCart}></ProductGrid>
    </div>
  )
}
