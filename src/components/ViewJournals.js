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
            <div name="testJournal1">

            </div>
            <br></br><br></br>
            <div name="testJournal2">
                
            </div>
        </div>
    );
};

export default ViewJournals;