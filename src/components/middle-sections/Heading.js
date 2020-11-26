import React from "react";

import bmw from "../../assets/images/bmw.svg";
import mercedes from "../../assets/images/mercedes-benz-8.svg";
import tesla from "../../assets/images/tesla-motors.svg";

function Heading() {

    return (
        <section className="wrapper">
            <div className="container">
                <header className="major">
                    <h2>We have worked for</h2>
                    <div className="row">
                        <div className="col-4 col-12-small"><img alt="bmw" src={bmw} /></div>
                        <div className="col-4 col-12-small"><img alt="mercedes" src={mercedes} /></div>
                        <div className="col-4 col-12-small"><img alt="tesla" src={tesla} /></div>
                    </div>
                </header>
            </div>
        </section>
    )
}

export default Heading;