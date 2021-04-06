import React from "react";

import Map from './Map';

function Information() {

    return (
        <section id="about" className="wrapper style1">
            <div className="container">
                <div className="row">
                    <section className="col-6 col-12-medium">
                        <h2>We have worked across the world</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero amet sit, quasi unde, dolorum ratione omnis tenetur voluptatum quibusdam, magni et! Atque laboriosam dignissimos ullam, veniam maiores enim expedita voluptates!</p>
                    </section>
                    <section className="col-6 col-12-medium">
                        <div className="box map">
                            <Map />    
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Information;