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
                <table className="styled-table center">
                    <thead>
                        <tr>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px"}}>Sad</label></td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
    );
};

export default MoodTracker;