import React from "react";
import { Carousel } from "react-bootstrap";
import cardinstruction from "../images/cardInstruction.jpg";
import backcard from "../images/backcard.jpg";
import frontcard from "../images/frontcard.jpg";
const CarouselComp = () => {
    var carouselData = [
        {
            imgLink: cardinstruction,
            captionHeading: "Instruction",
            captionContent: "Scan for either side of the card",
        },
        {
            imgLink: backcard,
            captionHeading: "Back side",
            captionContent: "Generate a 3D model with interactive buttons",
        },
        {
            imgLink: frontcard,
            captionHeading: "Front side",
            captionContent:
                "Generate resume with the zoom in/out functionality",
        },
    ];

    return (
        <Carousel>
            {carouselData.map(carouselItem => (
                <Carousel.Item>
                    <div className="carousel--item">
                        <img
                            className="carousel__image d-block"
                            src={carouselItem.imgLink}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption
                        style={{
                            backgroundColor: "rgba(128, 128, 128, 0.568)",
                        }}
                    >
                        <h3>{carouselItem.captionHeading}</h3>
                        <p>{carouselItem.captionContent}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselComp;
