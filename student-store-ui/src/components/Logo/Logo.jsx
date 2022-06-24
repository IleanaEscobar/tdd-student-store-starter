import * as React from "react"
import "./Logo.css"
import logo from './logo.png'
import { Link } from "react-router-dom"

export default function Logo() {
    return (
        <div className="logo">
        <Link to='/'>
            <img src={logo} width= "60" height="52" alt='Azul Logo'/>
        </Link>
        </div>
    )
}
