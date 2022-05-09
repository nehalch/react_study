import React from "react";

import github from "../images/github.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com"><img width="50" src={twitter} alt="twitter logo" /></a>
            <a href="https://github.com"><img width="50" src={github} alt="github logo" /></a>
            <a href="https://linkedin.com"><img width="50" src={linkedin} alt="linkedin logo" /></a>
            <a href="https://instagram.com"><img width="50" src={instagram} alt="instagram logo" /></a>
            <a href="https://facebook.com"><img width="50" src={facebook} alt="facebook logo" /></a>
        </footer>
    );
}