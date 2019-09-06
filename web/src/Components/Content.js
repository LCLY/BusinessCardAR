import React from "react";
import frontCard from "../images/front.jpg";
import backCard from "../images/back.jpg";
const Content = () => {
    return (
        <div className="project__desc">
            <div className="project__title" id="project__title">
                <h1>
                    <b>Project Description:</b>
                </h1>
            </div>
            <div className="project__desc--content">
                An augmented reality application built using Unity and Vuforia,
                allows user to scan an image target and it will generate certain
                3D models
            </div>
            <div className="businessCard">
                <img src={frontCard}></img>
            </div>
            <div className="businessCard">
                <img src={backCard}></img>
            </div>
        </div>
    );
};

export default Content;
