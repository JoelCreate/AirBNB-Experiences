import React from 'react'
import './App.css'

export default function Navbar(props) {
    return(
        <nav>
            <img src={props.img} className="app-logo" alt="air BNB logo" />
        </nav>
    )
}
