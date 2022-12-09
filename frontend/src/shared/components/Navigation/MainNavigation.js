import React from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";

function MainNavigation() {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">ExpPlaces</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <ul>
          <li>
            <Link to="/">Users</Link>
          </li>
          <li>
            <Link to="/">Share Places</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </MainHeader>
  );
}

export default MainNavigation;
