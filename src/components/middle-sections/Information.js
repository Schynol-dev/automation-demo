import React from "react";

import Image from './Image';

import image from '../../assets/images/stock-photo-engineer.jpg';

function Information() {

    return (
        <div className="information">
            <div className="information-wrapper">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusantium perspiciatis a, tempora velit quasi placeat eius officiis, repellendus laborum quis laboriosam vero nihil impedit sequi, ea quos autem! Eos?</p>
                <Image imageSrc={image} />
            </div>
            <div className="information-wrapper">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusantium perspiciatis a, tempora velit quasi placeat eius officiis, repellendus laborum quis laboriosam vero nihil impedit sequi, ea quos autem! Eos?</p>
                <Image imageSrc={image} />
            </div>
            <div className="information-wrapper">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusantium perspiciatis a, tempora velit quasi placeat eius officiis, repellendus laborum quis laboriosam vero nihil impedit sequi, ea quos autem! Eos?</p>
                <Image imageSrc={image} />
            </div>
            <div className="information-wrapper">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusantium perspiciatis a, tempora velit quasi placeat eius officiis, repellendus laborum quis laboriosam vero nihil impedit sequi, ea quos autem! Eos?</p>
                <Image imageSrc={image} />
            </div>
        </div>
    )
}

export default Information;