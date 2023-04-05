import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const AddJournals = () => {
    return (
        <div>
            <Header/>
            <div>
                <h2 style={{ textAlign: "center" }}
                    className="display-6" >
                        Add Journals Page
                </h2>
            </div>
            <div class="row">
            <div className="col-md-6 center">
                <form>
                    <div class="form-group">
                        <label for="inputDate">Date</label>
                        <input type="date" name="date" class="form-control" id="inputDate" placeholder="Enter Date" required />
                    </div>
                    <br></br>
                    <div class="form-group">
                        <label for="inputPin">PIN</label>
                        <input type="password" name="pin" class="form-control" id="inputPin" placeholder="xxxx" required />
                    </div>
                    <br></br>
                    <div>
                        <label for="inputSupervisor">Supervisor</label>
                        <input type="text" name="supervisor" class="form-control" id="inputSupervisor" placeholder="Keiko Engel" required/>
                    </div>
                    <br></br>
                    <div>
                        <label>Write your journal:
                            <textarea name="inputJournal" rows={4} cols={90} />
                        </label>
                    </div>
                    <br></br>
                    <Link to="/home">
                        <button type="submit" class="btn btn-success">Submit</button>
                    </Link>
                    <Link to="/home">
                        <button style={{ marginLeft: '25px' }} className="btn btn-danger">Cancel</button>
                    </Link>
                </form>
            </div>
        </div>
        </div>
    );
};

export default AddJournals;