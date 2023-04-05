import React from 'react';
import Header from './Header';

const MoodTracker = () => {
    return (
        <div>
            <Header/>
            <div>
                <h2 style={{ textAlign: "center" }}
                    className="display-6" >
                        Mood Tracker Page
                </h2>
            </div>
            <div>
                <table style=
                    {{
                        marginLeft: "10%",
                        marginRight: "10%"
                    }}>

                </table>
            </div>
        </div>
    );
};

export default MoodTracker;