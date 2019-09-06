import React from "react";
import frontCard from "../images/front.jpg";
import backCard from "../images/back.jpg";
import { Image } from "react-bootstrap";
import CardApk from "../Components/Download/CardAR.apk";
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
            <div className="businessCard" style={{ display: "flex" }}>
                <div style={{ paddingRight: "1rem" }}>
                    <Image src={frontCard} fluid />
                </div>
                <div>
                    <Image src={backCard} fluid />
                </div>
            </div>
            <div className="project__desc--content">
                After &nbsp;
                <a href={CardApk} download="CardAR.apk">
                    downloading
                </a>
                &nbsp; and installing the app, open the app the scan any of the
                images above. Each one of them will generate 3D models
                respectively.
            </div>
            <div className="project__desc--content">
                You can also interact with the 3D models, by enlarging/reducing
                the model's size or play animation by interacting with the
                buttons inside the virtual world.
            </div>
        </div>
    );
};

export default Content;
