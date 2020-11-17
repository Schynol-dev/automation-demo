import React from "react";

import ComputerIcon from '@material-ui/icons/Computer';
import BuildIcon from '@material-ui/icons/Build';
import BusinessIcon from '@material-ui/icons/Business';

function Important() {

    return (
        <section id="offer" className="wrapper style1">
            <div className="container">
                <div className="row gtr-200">
                    <section className="col-4 col-12-medium">
                        <div className="box highlight">
                            <ComputerIcon />
                            <h3>Important</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium repudiandae eveniet repellat in alias quaerat mollitia rem? Nostrum ipsam sint facilis voluptatem maiores, amet totam, inventore quae excepturi pariatur assumenda.</p>
                        </div>
                    </section>
                    <section className="col-4 col-12-medium">
                        <div className="box highlight">
                            <BuildIcon />
                            <h3>Important</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium repudiandae eveniet repellat in alias quaerat mollitia rem? Nostrum ipsam sint facilis voluptatem maiores, amet totam, inventore quae excepturi pariatur assumenda.</p>
                        </div>
                    </section>
                    <section className="col-4 col-12-medium">
                        <div className="box highlight">
                            <BusinessIcon />
                            <h3>Important</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium repudiandae eveniet repellat in alias quaerat mollitia rem? Nostrum ipsam sint facilis voluptatem maiores, amet totam, inventore quae excepturi pariatur assumenda.</p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Important;