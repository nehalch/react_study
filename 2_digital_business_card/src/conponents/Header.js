import React from "react";

import Homer from "../images/simpson.jpeg"

export default function Header() {
    return (
        <header>
            <img src={Homer} alt="Homer Simpson" width="300" />
            <h1>Homer Simpson</h1>
            <h3>FORTRAN Developer</h3>
            <h5><a href="google.com">google.com</a></h5>
            <a href="mailto:email@example.com"><button>mail</button></a>

        </header>
    );
}