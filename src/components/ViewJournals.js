import React from 'react';
import Header from './Header';

const ViewJournals = () => {
    return (
        <div>
            <Header/>
            <div>
                <br></br>
                <h2 style={{ textAlign: "center", fontFamily: "Optima" }}
                    className="display-6" >
                        View Journal Entries
                </h2>
            </div>
            <div>
                <div name="testJournal1" class="row">
                    <div className="col-md-6 center">
                        <label for="journal1">April 5, 2023</label>
                        <br></br>
                        <input type="password" placeholder="PIN (xxxx)" value="1234"/>
                        <br></br>
                        <br></br>
                        <textarea id="journal1" rows={7} cols={100}>
                            This is a test journal.
                        </textarea>
                    </div>
                </div>
                <br></br><br></br><br></br>
                <div name="testJournal2">
                    <div className="col-md-6 center">
                        <label for="journal1">April 9, 2023</label>
                        <br></br>
                        <input type="password" placeholder="PIN (xxxx)"/>
                        <p id="journal2" style={{fontWeight: "bold"}}>Enter PIN to unlock!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewJournals;