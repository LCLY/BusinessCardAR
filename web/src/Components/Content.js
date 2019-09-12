//libraries
import React from "react";
import { Image } from "react-bootstrap";
import { Header } from "semantic-ui-react";
//image path
import frontCard from "../images/front.jpg";
import backCard from "../images/back.jpg";

//download files
import CardApk from "../Components/Download/CardAR.apk";
import printCard from "../Components/Download/print.pdf";

//component
import CarouselComp from "./CarouselComp";

const Content = () => {
    return (
        <div className="project__desc" style={{ paddingTop: "1rem" }}>
            <div className="project__title" id="project__title">
                <Header as="h2">
                    <b>Project Description:</b>
                </Header>
            </div>
            <div className="project__desc--content">
                An augmented reality android application that allows user to
                scan an image target and it will generate targeted 3D models.
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
            <div id="details">
                <div className="project__secondHeader" id="project__title">
                    <Header as="h2">
                        <b>How it works:</b>
                    </Header>
                </div>
            </div>
            <div className="project__desc--content">
                After&nbsp;
                <a href={CardApk} download="CardAR.apk">
                    downloading
                </a>
                &nbsp;and installing the app, open the app and scan my business
                card or scan the images above. Each of them will generate a 3D
                model respectively. You can also
                <a href={printCard} target="_blank">
                    &nbsp;print out&nbsp;
                </a>
                a hard copy and play around with it.
                <br />
                <br />
                You can interact with the 3D models, by enlarging/reducing the
                model's size or even play animations by interacting with the
                buttons inside the virtual world.
            </div>
            <CarouselComp />
            <div
                className="project__secondHeader"
                id="project__title"
                style={{ paddingTop: "1.5rem" }}
            >
                <Header as="h2">
                    <b>Future goals</b>
                </Header>
            </div>
            <div style={{ paddingTop: "1rem" }}>
                Planning to add more functionalities, possibly by integrating a
                backend to make it even more interactive, complex and
                meaningful.
            </div>
            <div className="project__secondHeader" id="project__title">
                <Header as="h2">
                    <b>Tools</b>
                </Header>
            </div>
            <div
                className="project__desc--content"
                style={{ paddingTop: "1rem" }}
            >
                This application is built using
                <a href="https://unity.com/">&nbsp;Unity3D&nbsp;</a>and
                <a href="https://www.ptc.com/en/products/augmented-reality">
                    &nbsp;Vuforia
                </a>
                .
            </div>
        </div>
    );
};

export default Content;
