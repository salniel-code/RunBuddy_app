import React, { Component } from "react";
import { Link } from "react-router-dom";


// React component
const HeaderLogo = () => (
    <img className="header-logo" alt="logotype for header" src="./logotypen.png" 
    />
  );

const HeaderBg = () => (
  <div className="header-img-container">
  <img className="header-image" alt="background for header" src="./headerbild.jpg" 
/>
  </div>
);

export default class Header extends Component {
    render() {
      return (
        <header>
     <HeaderBg/>
        <div className="logo-container">
        <Link to="/">
            <HeaderLogo/>
        </Link>
        </div>
      </header>
      );
    }
  }
  