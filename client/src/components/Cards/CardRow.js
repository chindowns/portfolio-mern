import React from "react";
import "./card.css"


export function CardRow(props) {
    return(
    <div className="row cardRow">
        {props.children}
    </div>)
}

export default CardRow;