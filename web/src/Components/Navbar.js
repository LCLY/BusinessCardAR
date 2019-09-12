import React from "react";
import { Container, Menu } from "semantic-ui-react";
const Navbar = () => {
    return (
        <div className="navbar--desktop">
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item as="a" href="#" header>
                        Business Card AR
                    </Menu.Item>
                    <Menu.Item as="a" href="#">
                        Home
                    </Menu.Item>
                    <Menu.Item as="a" href="#details">
                        Details
                    </Menu.Item>
                    <Menu.Item as="a" href="#footerDiv">
                        Other links
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item
                            as="a"
                            href="./Download/CardAR.apk"
                            download="CardAR.apk"
                        >
                            Download
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
};

export default Navbar;
