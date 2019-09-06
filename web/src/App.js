import React from "react";
import "./css/style.min.css";
import { Container } from "react-bootstrap";
//Component
import Background from "../src/Components/Background";
import Download from "../src/Components/Download";
import Video from "../src/Components/Video";
import Content from "../src/Components/Content";
const App = () => {
    return (
        <div>
            <Container>
                <Background />
                <Video />
                <Content />
                <Download />
            </Container>
        </div>
    );
};

export default App;
