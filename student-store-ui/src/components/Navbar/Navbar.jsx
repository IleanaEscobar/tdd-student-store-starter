import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <p>Navbar</p>
      <Link to='/' style={{textDecoration: 'none' }}>
      <p className="header">Home</p>
      </Link>
      <Logo></Logo>
    </nav>
  )
}
