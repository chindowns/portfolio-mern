import React from "react";
import "./card.css";
import {Link} from "react-router-dom";

const Card = (props) => {

    return (
        <div className="col-md-4 col-sm-12 recipe-div">
            <div className="card">
                <Link to={"/recipes/" + recipe.id}>
                    <div className="card-body" style={style}> 
                    Card            </div>
                    <div className="card-title"><h5 className="card-title" >{recipe.name}</h5></div>
                </Link>

            </div>
        </div>
    );

}

export default Card;