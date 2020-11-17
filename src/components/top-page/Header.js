import React from "react";

function Header() {

    return (
        <div id="header">

            {/* Logo */}
            <h1 id="logo">Danzig <em>Automatik</em></h1>

            {/* Navigation */}
            <nav id="nav">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#offer">Offer</a></li>
                    <li><a href="#job">Job</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Header;