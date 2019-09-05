import React from "react";
import cardVid from "../images/cardar-cut.mp4";
import cardPic from "../images/card.jpg";
const Video = () => {
    return (
        <div className="videoWrapper">
            <video width="1000" height="720" controls poster={cardPic}>
                <source src={cardVid} type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;
