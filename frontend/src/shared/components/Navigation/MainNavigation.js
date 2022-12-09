import React from "react";

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
        <a href="/">Your Places</a>
      </h1>
      <nav className="main-navigation__header-nav">
        <ul>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Share Places</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </MainHeader>
  );
}

export default MainNavigation;
