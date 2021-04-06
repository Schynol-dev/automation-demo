import React from "react";

import Media from "./Media";

function Footer() {
    
    return (
        <div id="footer">
            <div className="container">
                <section id="contact">
                    <div className="row">
                        <section className="col-6 col-12-medium">
                            <h2>Contact</h2>
                            <h3>Phone: </h3>
                            <p>+00 000000000</p>
                            <h3>Email: </h3>
                            <p>mail@mail.com</p>
                        </section>
                        <section className="col-6 col-12-medium">
                            <h2>Get In Touch</h2>
                            <form>
                                <div className="row gtr-50">
                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="name" id="name" placeholder="Name" />
                                    </div>
                                    <div className="col-6 col-12-xsmall">
                                        <input type="email" name="email" id="email" placeholder="Email" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" id="message" placeholder="Message" rows="5"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><input type="submit" className="button alt" value="Send Message" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </form> 
                        </section>     
                    </div>
                </section>
            </div>
            <div className="copyright">
                <Media /> 
               <p>Copyright © {new Date().getFullYear()} || <a href="http://kamilschynol.com/" target="_blank" rel="noreferrer">Kamil Schynol</a></p> 
            </div>
        </div>
    )
}

export default Footer;