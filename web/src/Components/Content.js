import React from "react";
import frontCard from "../images/front.jpg";
import backCard from "../images/back.jpg";
import { Image } from "react-bootstrap";
import CardApk from "../Components/Download/CardAR.apk";
import printCard from "../Components/Download/print.pdf";
import CarouselComp from "./CarouselComp";
const Content = () => {
    return (
        <div className="project__desc">
            <div className="project__title" id="project__title">
                <h1>
                    <b>Project Description:</b>
                </h1>
            </div>
            <div className="project__desc--content">
                An augmented reality android application built using Unity and
                Vuforia, allows user to scan an image target and it will
                generate targeted 3D models.
            </div>
            <div
                className="businessCard"
                style={{ display: "flex", textAlign: "center" }}
            >
                <div style={{ paddingRight: "1rem" }}>
                    <Image src={frontCard} fluid alt="Front Card" />
                    <div>
                        <i>Front side</i>
                    </div>
                </div>
                <div>
                    <Image src={backCard} fluid alt="Back Card" />
                    <div>
                        <i>Back side</i>
                    </div>
                </div>
            </div>
            <div className="project__secondHeader">
                <h2>
                    <b>How it works</b>
                </h2>
            </div>
            <div className="project__desc--content">
                After&nbsp;
                <a href={CardApk} download="CardAR.apk">
                    downloading
                </a>
                &nbsp;and installing the app, open the app and scan the card or
                scan any of the images above. Each one of them will generate 3D
                models respectively. You can also
                <a href={printCard} target="_blank">
                    &nbsp;print&nbsp;
                </a>
                them and try it out.
            </div>
            <CarouselComp />
            <div
                className="project__desc--content"
                style={{ paddingTop: "1.5rem" }}
            >
                You can also interact with the 3D models, by enlarging/reducing
                the model's size or play animation by interacting with the
                buttons inside the virtual world.
            </div>
        </div>
    );
};

export default Content;
