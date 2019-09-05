import React from "react";
import "./css/style.min.css";
import { Container } from "react-bootstrap";
import Background from "../src/Components/Background";
import Download from "../src/Components/Download";
import Video from "../src/Components/Video";
const App = () => {
    return (
        <>
            <Container>
                <Background />
                <Video />
                <Download />
            </Container>
        </>
    );
};

export default App;
