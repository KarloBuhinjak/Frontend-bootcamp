import React from "react";
import styles from "../style/styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div class="logo">
        <img src="images/barca_logo.png" alt="barca-logo" class="barca-logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/players">Players</Link>
          </li>
          <li>
            <Link to="/standings">Standings</Link>
          </li>
          <li>
            <Link to="/matches">Matches</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
