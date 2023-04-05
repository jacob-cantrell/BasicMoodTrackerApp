import React from 'react';
import Header from './Header';

const About = () => {
    return (
        <div>
            <Header />
            <div>
                <h2 style={{ textAlign: "center" }}
                    className="display-6" >
                        About Page
                </h2>
            </div>
            <div style={{textAlign: "center"}}>
                <label>About this website:</label>
                <br></br>
                <p>Sample text.</p>
            </div>
        </div>
    );
};

export default About;