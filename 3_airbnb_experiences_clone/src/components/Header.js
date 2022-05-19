import React from "react";

// import logo from "../../public/images";

export default function Header() {
    return (
        <header>
            <img src={process.env.PUBLIC_URL + "/images/airbnb.png"} alt="logo" width="200" />
        </header>
    );
}