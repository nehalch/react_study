import React from "react";

import logo from "../images/airbnb.png";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="logo" width="200" />
        </header>
    );
}