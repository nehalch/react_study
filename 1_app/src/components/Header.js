import React from "react";
import reactLogo from "../images/logo192.png";

function Header() {
    return (
        <header>
            <img className="header" width="40px" src={reactLogo} alt="React logo" />
            <h2 className="header">React facts </h2>
            <h4 className="header">React Cource - Project 1 </h4>

        </header>
    );
}

export default Header;