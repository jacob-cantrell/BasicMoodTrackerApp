import React from 'react';
import Header from './Header';

const Contact = () => {
    return (
        <div>
            <Header />
            <div>
                <h2 style={{ textAlign: "center" }}
                    className="display-6" >
                        Contact Page
                </h2>
            </div>
            <br></br>
            <div style={{textAlign: "center"}}>
                <label style={{textAlign: "center"}}>About this website:</label>
                <br></br>
                <p>Sample text.</p>
            </div>
            <br></br>
            <div>
                <table className="styled-table center">
                    <thead>
                        <tr>
                            <th>Resource Name</th>
                            <th>Website</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Contact;