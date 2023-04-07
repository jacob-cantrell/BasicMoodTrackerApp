import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
    <div className="Auth-form-container" 
        style={{
            backgroundImage:`url(https://www.f5.com/content/dam/f5-com/page-assets-en/home-en/company/diversity-inclusion/zoom-background-mental-health-awareness-1.png)`
        }}
    >
      <form className="Auth-form" 
        style={{
            backgroundImage:`url(https://media.istockphoto.com/id/1156178759/vector/human-head-and-brain-creation-and-idea-concept.jpg?s=612x612&w=0&k=20&c=dDRkcnBadVH6oNVvULTIeqE-nEtwN2ADHZNI4LJ3hKQ=)`
        }}
      >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="example@wisc.edu"
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
            <Link to="/home">
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