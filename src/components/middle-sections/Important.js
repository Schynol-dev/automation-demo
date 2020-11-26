import React from "react";

import computer from '../../assets/images/computer.svg';
import robot from '../../assets/images/robot.svg';
import box from '../../assets/images/box.svg';

function Important() {

    return (
        <section id="offer" className="wrapper style1">
            <div className="container">
                <div className="row gtr-200">
                    <section className="col-4 col-12-medium">
                        <div className="box highlight">
                            <img alt="" src={box} />
                            <h3>PLC Programming</h3>
                            <p>We can help you to develop a software for your PLC - Programmable Logic Controller</p>
                        </div>
                    </section>
                    <section className="col-4 col-12-medium">
                        <div className="box highlight">
                            <img alt="" src={robot} />
                            <h3>Robots Programming</h3>
                            <p>We can help you to develop a software for KUKA / ABB / FANUC robots</p>
                        </div>
                    </section>
                    <section className="col-4 col-12-medium">
                        <div className="box highlight">
                            <img alt="" src={computer} />
                            <h3>Visualization</h3>
                            <p>We can help you to develop a visualization using platforms - ZenOn / InTouch / WiCC Flexible</p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Important;