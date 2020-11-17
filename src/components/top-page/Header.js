import React from "react";

function Header() {

    return (
        <div id="header">

            {/* Logo */}
            <section id="home">
                <h1 id="logo">Danzig <em>Automatik</em></h1>    
            </section>
            
            {/* Navigation */}
            <nav id="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#offer">Offer</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#job">Job</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Header;