import * as React from "react"
import heroImage from './heroImage.png'
import "./Hero.css"

export default function Hero() {
    return (
    <div className="Hero">
        <p className="Intro">Welcome!</p>
        <img className="hero-img" src={heroImage} alt="hero image"/>
    </div>
    )
}
