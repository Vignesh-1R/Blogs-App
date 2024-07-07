
import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

const Header = () => {
  return (
    <header>

      <div className="headLeft" id="headLeft">
        <h3><Link to="/">Blogs App</Link></h3>
        <nav id="alignNav">
          <ul>
            <li id="navList"><Link to="/">Home</Link></li>
            <li id="navList"><Link to="/blogs">Blogs</Link></li>
            <li id="navList"><Link to="/users">Users</Link></li>
          </ul>
        </nav>
      </div>
      <div id="headRight" className="headRight">
        <input type="search" name="search" placeholder="Search..." id="search"/>
        <button id="searchButton">Search</button>
      </div>
    </header>
  );
};

export default Header;
