import React from 'react';
import Header from './Header';

const ViewJournals = () => {

    return (
        <div>
            <Header/>
            <div>
                <h2 style={{ textAlign: "center" }}
                    className="display-6" >
                        View Journals Page
                </h2>
            </div>
            <div>
                <div name="testJournal1" class="row">
                    <div className="col-md-6 center">
                        <label for="journal1">April 5, 2023</label>
                        <br></br>
                        <input type="text" value={journal1PIN} onChange='checkPIN()' placeholder="PIN (xxxx)"/>
                        <br></br>
                        <p id="journal1">
                            This is a test journal.
                        </p>
                    </div>
                </div>
                <br></br><br></br>
                <div name="testJournal2">
                    <div className="col-md-6 center">
                        <label for="journal1">April 5, 2023</label>
                        <br></br>
                        <p id="journal1">
                          This is a test journal.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewJournals;