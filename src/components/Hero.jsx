import React from 'react'
import './App.css'

export default function Hero(props) {
    return (
        <div className="hero-container">
            <img src={props.img} className="hero-img" alt="hero image for air bnb experiences" />
            <div className="hero-title">
                <h1>Online Experiences</h1>
                <h2>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
            </div>
        </div>
        
    )
}