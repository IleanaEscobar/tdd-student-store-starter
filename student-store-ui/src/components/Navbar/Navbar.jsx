import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <p>Navbar</p>
      <Logo></Logo>
    </nav>
  )
}
