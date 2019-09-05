import React from "react";
import "./css/style.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Background from "../src/Components/Background";
const App = () => {
    return (
        <>
            <Background />
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
