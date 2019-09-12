import React from "react";
import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
} from "semantic-ui-react";

const Footer = () => {
    return (
        <Segment
            inverted
            vertical
            style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
            id="footerDiv"
        >
            <Container textAlign="center">
                <div style={{ fontSize: "1.5rem" }}>
                    For more projects, visit
                    <a href="https://lcly.github.io/personalwebsite/">
                        &nbsp;here
                    </a>
                </div>
                <Divider inverted section />
                <div>
                    <a
                        href="https://github.com/LCLY/MRHololens"
                        className="inherit__link"
                    >
                        <i className="fab fa-github footer__icon" />
                    </a>
                    <a
                        href="https://linkedin.com/in/lcly9294/"
                        className="inherit__link"
                    >
                        <i className="fab fa-linkedin footer__icon" />
                    </a>
                    <a
                        href="mailto:lchoo9294@gmail.com"
                        className="inherit__link"
                    >
                        <i className="fas fa-envelope footer__icon" />
                    </a>
                    <a
                        href="https://lcly.github.io/personalwebsite/"
                        className="inherit__link"
                    >
                        <i className="fas fa-globe footer__icon" />
                    </a>
                </div>

                <div className="footer__spacing">
                    <i className="far fa-copyright" /> 2019 Henry Choo. All
                    rights reserved.
                </div>
            </Container>
        </Segment>
    );
};

export default Footer;
