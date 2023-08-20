import React from 'react'
import './App.css'

export default function Card(props) {
    let badgeText

    if(props.openSpots === 0) {
        badgeText = "Sold Out"
    } else if (props.location === "Online") {
        badgeText = "Online"
    }

    return(
        <div className="card-container">            
           {
            badgeText && 
            <div className="card-badge">
                <p>{badgeText}</p>
            </div>
            }
           <img src={props.coverImg} className="card-img" alt="katie swimming experience" />
           <div className="card-stats">
                <i className="star fa-sharp fa-solid fa-star"></i>
                <p>{props.stats.rating}</p>
                <p className="grey num-of-ratings">({props.stats.reviewCount})</p>
                <p className="grey location">• {props.location}</p>
           </div>
           <p className="card-activity-title">{props.title}</p>
           <p className="price"><span className="strong">From ${props.price}</span> / person</p>
        </div>
    )
}