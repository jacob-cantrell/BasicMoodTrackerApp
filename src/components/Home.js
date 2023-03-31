import React from 'react';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <h2 style={{ textAlign: "center" }}
                    className="display-6" >
                        Home Page
                </h2>
            </div>
        </div>
    );
};

export default Home;