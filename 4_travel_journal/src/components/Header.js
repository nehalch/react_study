import React from "react";                                                                      

const logo =  process.env.PUBLIC_URL + "/images/earth.svg"

const Header = () => {
    return (
        <header>
            <img className="logo" src={ logo} alt="earth" width="100"/>
            <h2>
                My Travel Journal
            </h2>
        </header>
    );
}
export default Header;