import React from "react";
import { Container, Menu } from "semantic-ui-react";

class HiddenNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            iconName: "fa-bars",
        };
    }

    handleClick = () => {
        //if show, then the icon is times
        if (this.state.show === false) {
            this.setState({ iconName: "fa-times", show: true });
        } else {
            this.setState({ iconName: "fa-bars", show: false });
        }
    };

    handleNavbarClick = () => {
        this.setState({ iconName: "fa-bars", show: false });
    };

    render() {
        return (
            <div className="navbar--hidden">
                <Menu fixed="top" inverted>
                    <div className="hidden--outerContainer">
                        <div className="hidden__top">
                            <a className="hidden__text" href="#">
                                <div className="hidden__home">
                                    Business Card AR
                                </div>
                            </a>
                            <div className="hidden__icon__div">
                                <i
                                    className={`fas ${this.state.iconName} hidden__icon`}
                                    onClick={this.handleClick}
                                />
                            </div>
                        </div>
                        {this.state.show ? (
                            <div>
                                <a
                                    className="hidden__text"
                                    href="#"
                                    onClick={this.handleNavbarClick}
                                >
                                    <div className="hidden__items">Home</div>
                                </a>

                                <a
                                    className="hidden__text"
                                    href="#details"
                                    onClick={this.handleNavbarClick}
                                >
                                    <div className="hidden__items__even">
                                        Details
                                    </div>
                                </a>

                                <a
                                    className="hidden__text"
                                    href="#footerDiv"
                                    onClick={this.handleNavbarClick}
                                >
                                    <div className="hidden__items__even">
                                        Other links
                                    </div>
                                </a>
                                <a
                                    className="hidden__text"
                                    href="./Download/CardAR.apk"
                                    download="cardAR.apk"
                                >
                                    <div className="hidden__items">
                                        Download
                                    </div>
                                </a>

                                <div
                                    className="hidden__items"
                                    style={{ padding: "1.2rem 0.5rem" }}
                                >
                                    <a
                                        href="https://github.com/LCLY"
                                        className="inherit__link"
                                    >
                                        <i className="fab fa-github hidden__footer__icon" />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/lcly9294/"
                                        className="inherit__link"
                                    >
                                        <i className="fab fa-linkedin hidden__footer__icon" />
                                    </a>
                                    <a
                                        href="mailto:lchoo9294@gmail.com"
                                        className="inherit__link"
                                    >
                                        <i className="fas fa-envelope hidden__footer__icon" />
                                    </a>
                                    <a
                                        href="https://lcly.github.io/personalwebsite/"
                                        className="inherit__link"
                                    >
                                        <i className="fas fa-globe hidden__footer__icon" />
                                    </a>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </Menu>
            </div>
        );
    }
}

export default HiddenNavbar;
