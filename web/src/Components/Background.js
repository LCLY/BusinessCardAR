import React from "react";
import cardImg from "../images/card.jpg";
const Background = () => {
    return (
        <div>
            <div className="title"> Business Card AR </div>
            <img className="cardImg" src={cardImg} alt="card"></img>
        </div>
    );
};

export default Background;
