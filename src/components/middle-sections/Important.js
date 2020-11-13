import React from "react";

import ComputerIcon from '@material-ui/icons/Computer';
import BuildIcon from '@material-ui/icons/Build';
import BusinessIcon from '@material-ui/icons/Business';

function Important() {

    return (
        <div className="important">
            <div className="wrapper">
                <div className="icon">
                    <ComputerIcon />
                </div>
                <h2>Important</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium repudiandae eveniet repellat in alias quaerat mollitia rem? Nostrum ipsam sint facilis voluptatem maiores, amet totam, inventore quae excepturi pariatur assumenda.</p>
            </div>
            <div className="wrapper">
                <div className="icon">
                    <BuildIcon />
                </div>
                <h2>Important</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium repudiandae eveniet repellat in alias quaerat mollitia rem? Nostrum ipsam sint facilis voluptatem maiores, amet totam, inventore quae excepturi pariatur assumenda.</p>
            </div>
            <div className="wrapper">
                <div className="icon">
                    <BusinessIcon />
                </div>
                <h2>Important</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium repudiandae eveniet repellat in alias quaerat mollitia rem? Nostrum ipsam sint facilis voluptatem maiores, amet totam, inventore quae excepturi pariatur assumenda.</p>
            </div>
        </div>
    )
}

export default Important;