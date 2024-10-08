import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="nav-list">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Alla Löprundor
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/skapa" className="nav-link">
                Skapa Löprunda
              </Link>
            </li>
            <li className="navbar-item about-link">
              <Link to="/om" className="nav-link">
                Om 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
