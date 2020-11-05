import React from "react";

function Image(props) {

    return (
        <div className="image" style={{backgroundImage: `url(${props.imageSrc})`}}></div>
    )
}

export default Image;