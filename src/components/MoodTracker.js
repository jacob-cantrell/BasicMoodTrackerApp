import React from 'react';
import Header from './Header';

const MoodTracker = () => {
    return (
        <div>
            <Header/>
            <div>
                <br></br>
                <h2 style={{ textAlign: "center", fontFamily: "Optima" }}
                    className="display-6" >
                        Weekly Mood Tracker
                </h2>
            </div>
            <div>
                <br></br>
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
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "green", fontFamily: "Optima"}}>Happy</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "green", fontFamily: "Optima"}}>Happy</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "green", fontFamily: "Optima"}}>Happy</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "green", fontFamily: "Optima"}}>Happy</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "green", fontFamily: "Optima"}}>Happy</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "green", fontFamily: "Optima"}}>Happy</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "green", fontFamily: "Optima"}}>Happy</label></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0A955E", fontFamily: "Optima"}}>Calm</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0A955E", fontFamily: "Optima"}}>Calm</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0A955E", fontFamily: "Optima"}}>Calm</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0A955E", fontFamily: "Optima"}}>Calm</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0A955E", fontFamily: "Optima"}}>Calm</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0A955E", fontFamily: "Optima"}}>Calm</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0A955E", fontFamily: "Optima"}}>Calm</label></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", fontFamily: "Optima"}}>Okay</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", fontFamily: "Optima"}}>Okay</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", fontFamily: "Optima"}}>Okay</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", fontFamily: "Optima"}}>Okay</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", fontFamily: "Optima"}}>Okay</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", fontFamily: "Optima"}}>Okay</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", fontFamily: "Optima"}}>Okay</label></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0053B7", fontFamily: "Optima"}}>Sad</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0053B7", fontFamily: "Optima"}}>Sad</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0053B7", fontFamily: "Optima"}}>Sad</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0053B7", fontFamily: "Optima"}}>Sad</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0053B7", fontFamily: "Optima"}}>Sad</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0053B7", fontFamily: "Optima"}}>Sad</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#0053B7", fontFamily: "Optima"}}>Sad</label></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#F4C60C", fontFamily: "Optima"}}>Stressed</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#F4C60C", fontFamily: "Optima"}}>Stressed</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#F4C60C", fontFamily: "Optima"}}>Stressed</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#F4C60C", fontFamily: "Optima"}}>Stressed</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#F4C60C", fontFamily: "Optima"}}>Stressed</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#F4C60C", fontFamily: "Optima"}}>Stressed</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "#F4C60C", fontFamily: "Optima"}}>Stressed</label></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "red", fontFamily: "Optima"}}>Angry</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "red", fontFamily: "Optima"}}>Angry</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "red", fontFamily: "Optima"}}>Angry</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "red", fontFamily: "Optima"}}>Angry</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "red", fontFamily: "Optima"}}>Angry</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "red", fontFamily: "Optima"}}>Angry</label></td>
                            <td><input type="checkbox"/><label style={{paddingLeft:"20px", color: "red", fontFamily: "Optima"}}>Angry</label></td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
    );
};

export default MoodTracker;