import React from "react";

import image from '../../assets/images/stock-photo-engineer.jpg';

function Information() {

    return (
        <section id="about" className="wrapper style1">
            <div className="container">
                <div className="row">
                    <section className="col-6 col-12-medium">
                        <div className="box post">
                            <div className="image left"><img alt="" src={image} /></div>
                            <div className="inner">
                                <h3>Learn more</h3>
                                <p>We have been on the market for several years. We are a group of PLC programmers that specialize in creating new standards, integrating new modeals and preparing final documentation for the client.</p>
                            </div>
                        </div>
                    </section>
                    <section className="col-6 col-12-medium">
                        <div className="box post">
                            <div className="image left"><img alt="" src={image} /></div>
                            <div className="inner">
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore deserunt omnis sed fuga odio qui nulla. Vitae aliquid incidunt molestias est nulla illum, laborum dolorem, quia quas, accusantium voluptas?</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="row">
                    <section className="col-6 col-12-medium">
                        <div className="box post">
                            <div className="image left"><img alt="" src={image} /></div>
                            <div className="inner">
                                <h3>Our Projects</h3>
                                <p>We have realised many projects across the world including countries like Germany, United Kingdom, United States of America and China.</p>
                            </div>
                        </div>
                    </section>
                    <section className="col-6 col-12-medium">
                        <div className="box post">
                            <div className="image left"><img alt="" src={image} /></div>
                            <div className="inner">
                                <h3>Headquarter</h3>
                                <p>We have our headquerter located in Poland. Our company have worked with the largest customers in the Automotive industry, but we are not limited only to this sector.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Information;

        {/* <div className="information">
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
        </div> */}