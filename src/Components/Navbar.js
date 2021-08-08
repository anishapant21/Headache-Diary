import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { FaFeatherAlt } from "react-icons/fa";

function Navbar({ handleLogout }) {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <div className="logo-wrapper">
              <div className="align-me-left">
                <div className="logo"> Headache Diary</div>
                <div className="featureall"></div>
              </div>
              <div className="featureonly">
                <FaFeatherAlt size={40} />
              </div>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-5 navwrapper">
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink
                    exact
                    activeClassName="active-link"
                    className="nav-each"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink
                    exact
                    activeClassName="active-link"
                    className="nav-each"
                    to="/history"
                  >
                    History
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink
                    exact
                    activeClassName="active-link"
                    className="nav-each"
                    to="/insights"
                  >
                    Insights
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink className="nav-each logout" to="/">
                    <AiOutlineLogout onClick={handleLogout} />
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
