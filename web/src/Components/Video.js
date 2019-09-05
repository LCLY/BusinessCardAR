import React from "react";
import cardVid from "../images/cardar-cut.mp4";
const Video = () => {
    return (
        <div>
            <video>
                <source
                    width="320"
                    height="240"
                    autoplay
                    src={cardVid}
                    type="video/mp4"
                />
            </video>
        </div>
    );
};

export default Video;
