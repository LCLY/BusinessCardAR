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
            <div style={{ paddingTop: "0.5rem" }}>
                <a
                    href="https://github.com/LCLY"
                    target="_blank"
                    style={{ color: "inherit" }}
                >
                    <i
                        className="fab fa-github footer__icon"
                        style={{
                            padding: "0 0.5rem 0 0.5rem",
                            fontSize: "2rem",
                        }}
                    />
                </a>
                <a
                    href="https://linkedin.com/in/lcly9294/"
                    target="_blank"
                    style={{ color: "inherit" }}
                >
                    <i
                        className="fab fa-linkedin footer__icon"
                        style={{
                            padding: "0 0.5rem 0 0.5rem",
                            fontSize: "2rem",
                        }}
                    />
                </a>
                <a
                    href="mailto:lchoo9294@gmail.com"
                    target="_blank"
                    style={{ color: "inherit" }}
                >
                    <i
                        className="fas fa-envelope footer__icon"
                        style={{
                            padding: "0 0.5rem 0 0.5rem",
                            fontSize: "2rem",
                        }}
                    />
                </a>
                <a
                    href="https://lcly.github.io/personalwebsite/"
                    target="_blank"
                    style={{ color: "inherit" }}
                >
                    <i
                        className="fas fa-globe footer__icon"
                        style={{
                            padding: "0 0.5rem 0 0.5rem",
                            fontSize: "2rem",
                        }}
                    />
                </a>
            </div>
            <div className="download__footer" style={{ paddingTop: "0.5rem" }}>
                Only Android for now, might require disabling Play Protect
                during installation.
            </div>
        </div>
    );
};

export default Download;
