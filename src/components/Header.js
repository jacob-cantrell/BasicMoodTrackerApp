import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className="display-3" style=
                {{
                    textAlign: "left",
                    backgroundImage: `url(https://www.nwosu.edu/uploads/627-18974.png)`,
                    backgroundSize: "1750px 200px cover",
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: "20%",
                    paddingBottom: 25,
                    paddingTop: 25
                }}>
                    Mood Tracker Website
            </h1>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="navbar-nav center">
                        <Link className="navbar-brand" to="/home" >Home</Link>
                        <Link className="nav-link" to="/add-journal">Add Journal</Link>
                        <Link className="nav-link" to="/view-journal">View Journals</Link>
                        <Link className="nav-link" to="/mood-tracker">Mood Tracker</Link>
                        <Link className="nav-link" to="/about">About Us</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;