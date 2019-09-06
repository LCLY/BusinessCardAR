import React from "react";
import { Button } from "react-bootstrap";
import CardApk from "../Components/Download/CardAR.apk";
const Download = () => {
    return (
        <div className="download--wrapper">
            <div className="download__title">Try it yourself!</div>
            <a href={CardApk} download="CardAR.apk">
                <Button variant="primary" size="lg">
                    <i className="fas fa-download"></i>
                    &nbsp; Download Apk
                </Button>
            </a>
            <div className="download__footer" style={{ paddingTop: "0.5rem" }}>
                Only Android for now, might require disabling Play Protect
                during installation.
            </div>
        </div>
    );
};

export default Download;
