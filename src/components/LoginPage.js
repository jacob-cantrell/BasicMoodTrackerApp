import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
    <div className="Auth-form-container" 
        style={{
            backgroundImage:`url(https://media.istockphoto.com/id/1294477039/vector/metaphor-bipolar-disorder-mind-mental-double-face-split-personality-concept-mood-disorder-2.jpg?s=612x612&w=0&k=20&c=JtBxyFapXIA63hzZk_F5WNDF92J8fD2gIFNX3Ta4U3A=)`,
            backgroundSize: "100% 100%"
        }}
    >
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="example@uwm.edu"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Link to="/mood-tracker">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </Link>
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="/register">Forgot password?</a>
          </p>
        </div>
      </form>
    </div>
    );
};

export default LoginPage;