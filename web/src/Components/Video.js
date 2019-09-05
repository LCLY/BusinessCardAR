import React from "react";
import cardVid from "../images/cardar-cut.mp4";
import cardPic from "../images/card.jpg";
const Video = () => {
    return (
        <div className="videoWrapper">
            <video controls poster={cardPic}>
                <source src={cardVid} type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;
