import React from "react";
import "./css/style.min.css";
import { Container } from "react-bootstrap";
import Background from "../src/Components/Background";
import Download from "../src/Components/Download";
const App = () => {
    return (
        <>
            <Container>
                <Background />
                <Download></Download>
            </Container>
        </>
    );
};

export default App;
