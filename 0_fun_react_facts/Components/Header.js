// import React from "react";

function Header() {
    return (
        <header>
            <img className="header" src="./react.png" alt="React logo" />
            <nav>
                <ul className = "nav">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;