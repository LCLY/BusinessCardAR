import React from "react";
import { Carousel } from "react-bootstrap";
import cardinstruction from "../images/cardInstruction.jpg";
import backcard from "../images/backcard.jpg";
import frontcard from "../images/frontcard.jpg";
const CarouselComp = () => {
    let carouselData = [
        {
            imgLink: { cardinstruction },
            captionHeading: "test1",
            captionContent: "test content",
        },
        {
            imgLink: { backcard },
            captionHeading: "test1",
            captionContent: "test content",
        },
        {
            imgLink: { frontcard },
            captionHeading: "test1",
            captionContent: "test content",
        },
    ];

    return (
        <Carousel>
            <Carousel.Item>
                <div className="carousel--item">
                    <img
                        className="d-block w-100"
                        src={carouselData.imgLink}
                        alt="First slide"
                        style={{ height: "100%" }}
                    />
                </div>
                <Carousel.Caption>
                    <h3>{carouselData.captionHeading}</h3>
                    <p>{carouselData.captionContent}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComp;
