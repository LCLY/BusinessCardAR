import React from "react";
import cardImg from "../images/card.jpg";
import { Container, Row, CardColumns, Button } from "react-bootstrap";
const Background = () => {
    return (
        <div>
            <Container>
                <div className="title"> Business Card AR </div>
                <img className="cardImg" src={cardImg} alt="card"></img>
                <div className="download--wrapper">
                    <div className="download__title">Want to try it out?</div>
                    <Button variant="primary" size="lg">
                        <i class="fas fa-download"></i>
                        &nbsp; Download
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Background;
