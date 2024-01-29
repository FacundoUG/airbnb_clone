import React from "react";

export default function Card(props){
    let text
    if(props.spots === 0)
        text="SOLD OUT"
    else if(props.city === 'Online')
        text="ONLINE"
    return ( 
        <div className="Card">
            {text && <div className="tag">{text}</div>}
            <img src={props.item.coverImg} />
            <div className="Rating">
                <img src="/images/star.png"/>
                <p>{props.item.stats.rating}</p>
                <p className="comments">({props.item.stats.reviewCount})•{props.item.location}</p>
            </div>
            <p>{props.item.title}</p>
            <div className="price">
                <p className="mount">From ${props.item.price}</p>
                <p>/person</p>
            </div>
        </div>
    )
}