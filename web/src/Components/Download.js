import React from "react";
import { Button } from "react-bootstrap";
const Download = () => {
    return (
        <div className="download--wrapper">
            <div className="download__title">Try it yourself!</div>
            <Button variant="primary" size="lg">
                <i className="fas fa-download"></i>
                &nbsp; Download Apk
            </Button>
            <div style={{ paddingTop: "0.5rem" }}>Only Android for now</div>
        </div>
    );
};

export default Download;
