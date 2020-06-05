import React from "react";
import "./card.css"


export function CardContainer(props) {
    return(
    <div className="container card-container">
        {props.children}
    </div>)
}

export default CardContainer;