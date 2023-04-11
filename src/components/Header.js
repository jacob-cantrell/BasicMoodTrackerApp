import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className="display-3" style=
                {{
                    textAlign: "center",
                    backgroundImage: `url(https://emed.wisc.edu/wp-content/uploads/sites/1765/2022/03/hero-banner-grey-lines-1600x200-2.png)`,
                    backgroundSize: "100% 200px",
                    marginTop: 0,
                    marginBottom: 0,
                    paddingBottom: 25,
                    paddingTop: 25,
                    fontFamily: "Optima"
                }}>
                    <span style={{color: "green"}}>M</span><span style={{color: "blue"}}>o</span><span style={{color: "#F4C60C"}}>o</span><span style={{color: "orange"}}>d</span><span style={{color: "red"}}>y</span>
            </h1>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="navbar-nav center">
                        <Link className="nav-link" to="/mood-tracker" style={{fontFamily: "Optima"}}>Mood Tracker</Link>
                        <Link className="nav-link" to="/add-journal" style={{fontFamily: "Optima"}}>Add Journal</Link>
                        <Link className="nav-link" to="/view-journal" style={{fontFamily: "Optima"}}>View Journals</Link>
                        <Link className="nav-link" to="/safety-plan" style={{fontFamily: "Optima"}}>Safety Plan</Link>
                        <Link className="nav-link" to="/contact" style={{fontFamily: "Optima"}}>Help</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;