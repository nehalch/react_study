import React from "react";
import reactLogo from "../images/logo192.png";

function Header() {
    return (
        <header>
            <img className="header" width="40px" src={reactLogo} alt="React logo" />
            <nav>
                <ul className="nav">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;