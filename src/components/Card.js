import React from 'react';

export default function Card (props){

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.country === "Online") {
        badgeText = "ONLINE"
    }
   
    return(
        <div className='card'>
            { badgeText && <div className='card--badge'> {badgeText}</div>}
            <img src = {require(`../images/${props.item.img}`)} className= "card--image"/>
            <div className='card--stats'>
               <img src = {require("../images/star.png")} className="card--star" />
               <span>{props.item.rating}</span>
               <span className='gray'>({props.item.reviewCount}) •</span>
               <span className='gray'>{props.item.country}</span>
            </div>
            <p className='card--title'>{props.item.title}</p>
            <p className='card--price'><span className='bold'>From ${props.item.price}</span> / person</p>

        </div>
    )
}