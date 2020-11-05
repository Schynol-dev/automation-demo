import React from "react";

function Icon(props) {

    return (
        <div className="icon" style={{backgroundImage: `url(${props.imageSrc})`}}></div>
    )
}

export default Icon;