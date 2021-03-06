import React from "react";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = ({ isAuthenticated, username, getUser, logout }) => {

  return (
    <div id="menu">
      <h1>Kwitter</h1>
      {isAuthenticated && (
        <div id="menu-links">
          <Link to="/newsfeed">News Feed</Link>
          <Link to="/" onClick={logout}>
            Logout
          </Link>
          <Link to={`/profiles/${username}`}>Profile</Link>
        </div>
      )}
    </div>
  );
};

Menu.defaultProps = {
  isAuthenticated: false,
  logout: () => {},
};

Menu.propTypes = {
  isAuthenticated: ProptTypes.bool.isRequired,
  logout: ProptTypes.func.isRequired,
};
