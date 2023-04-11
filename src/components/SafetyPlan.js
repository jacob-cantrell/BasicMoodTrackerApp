import React from 'react';
import Header from './Header';

const SafetyPlan = () => {
    return (
        <div>
            <Header />
            <div>
                <br></br>
                <h2 style={{ textAlign: "center", fontFamily: "Optima" }}
                    className="display-6" >
                        Safety Plan
                </h2>
            </div>
            <div className="col-md-6 center">
                <form>
                    <div class="form-group">
                        <label for="inputWarningSigns" style={{fontSize: "20px"}}>Warning Signs</label>
                        <div id="inputWarningSigns">
                            <label style={{paddingLeft: "20px"}}>1 - Feeling misunderstood</label>
                            <br></br>
                            <label style={{paddingLeft: "20px"}}>2 - Being overstimulated</label>
                            <br></br>
                            <label style={{paddingLeft: "20px"}}>3 - Being around people from their past</label>
                        </div>
                    </div>
                    <br></br>
                    <div class="form-group">
                        <label for="inputCopingStrats" style={{fontSize: "20px"}}>Coping Strategies</label>
                        <div id="inputCopingStrats">
                            <label style={{paddingLeft: "20px"}}>1 - Breathing exercises</label>
                            <br></br>
                            <label style={{paddingLeft: "20px"}}>2 - Listening to music</label>
                            <br></br>
                            <label style={{paddingLeft: "20px"}}>3 - Guided meditation</label>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <label style={{fontSize: "20px"}}>Contacts</label>
                        <br></br><br></br>
                        <table className="styled-table center">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{textAlign: "center"}}>
                                    <th>First Last</th>
                                    <th>(123) 456-7890</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br></br>
                </form>
            </div>
        </div>
    );
};

export default SafetyPlan;