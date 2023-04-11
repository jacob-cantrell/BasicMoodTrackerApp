import React from 'react';
import Header from './Header';

const Contact = () => {
    return (
        <div>
            <Header />
            <div>
                <br></br>
                <h2 style={{ textAlign: "center", fontFamily: "Optima" }}
                    className="display-6" >
                        Resources
                </h2>
            </div>
            <br></br>
            <div style={{textAlign: "center"}}>
                <label style={{textAlign: "center"}}>If you need help, please reach out!</label>
                <br></br>
                <p>If you need emergent help, feel free to contact these resources. They are available 24/7 within Milwaukee County.</p>
            </div>
            <br></br>
            <div>
                <table className="styled-table center">
                    <thead>
                        <tr>
                            <th>Resource Name</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{textAlign: "center"}}>
                            <th>Milwaukee Country Crisis</th>
                            <th style={{paddingLeft:"70px"}}>(414) 257-7222</th>
                        </tr>
                        <tr style={{textAlign: "center"}}>
                            <th>Children's Mobile Crisis Team - To Help Children and Teens in Crisis</th>
                            <th style={{paddingLeft:"70px"}}>(414) 257-7621</th>
                        </tr>
                        <tr style={{textAlign: "center"}}>
                            <th >National Suicide Prevention Lifeline</th>
                            <th style={{paddingLeft:"70px"}}>988 / 1 (800) 273-8255</th>
                        </tr>
                        <tr style={{textAlign: "center"}}>
                            <th>National Domestic Violence Hotline</th>
                            <th style={{paddingLeft:"70px"}}>1 (800) 799-7233</th>
                        </tr>
                        <tr style={{textAlign: "center"}}>
                            <th>National Drugs and Alcohol Hotline</th>
                            <th style={{paddingLeft:"70px"}}>1 (800) 662-4357</th>
                        </tr>
                        <tr style={{textAlign: "center"}}>
                            <th>Bullying and Depression Hotline</th>
                            <th style={{paddingLeft:"70px"}}>1 (800) 448-3000</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Contact;