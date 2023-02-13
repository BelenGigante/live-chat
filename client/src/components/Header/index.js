import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Chit-Chat</h1>
        </Link>
      </div>
      {Auth.loggedIn() ? (
            <>
              <Link className="btn" to="/me">
                My Profile
              </Link>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn" to="/login">
                Login
              </Link>
              <Link className="btn" to="/signup">
                Signup
              </Link>
            </>
          )}
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
