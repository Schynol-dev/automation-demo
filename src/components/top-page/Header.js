import React, { useEffect } from "react";

function Header() {

    useEffect(() => {
        
        const navigation = document.getElementById("nav");
        const sticky = navigation.offsetTop;

        const scrollCallBack = window.addEventListener("scroll", () => {

            if(window.pageYOffset > sticky) {
                navigation.classList.add("sticky");
            } else {
                navigation.classList.remove("sticky");
            }

        });

        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        }
    }, []);

    return (
        <div id="header">

            {/* Logo */}
            <section id="home">
                <h1 id="logo">Lorem <em>Automatik</em></h1>    
            </section>
            
            {/* Navigation */}
            <nav id="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#offer">Offer</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Header;