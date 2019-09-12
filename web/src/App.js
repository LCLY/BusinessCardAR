import React from "react";
import "./css/style.min.css";
// import { Container } from "react-bootstrap";
import { Container } from "semantic-ui-react";
//Component
import Background from "../src/Components/Background";
import Download from "../src/Components/Download";
import Video from "../src/Components/Video";
import Content from "../src/Components/Content";
import HiddenNavbar from "./Components/HiddenNavbar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <HiddenNavbar />
            <Container text>
                <Background />
                <Video />
                <Content />
                <Download />
            </Container>
            <Footer />
        </div>
    );
};

export default App;
