import * as React from "react"
import heroImage from './heroImage.png'
import "./Hero.css"

export default function Hero() {
    return (
    <div className="Hero" width="50" height ="50">
        <p className="Intro">Welcome!</p>
        <img className="hero-img" src={heroImage} width="60" height= "50" alt="hero image"/>
    </div>
    )
}
