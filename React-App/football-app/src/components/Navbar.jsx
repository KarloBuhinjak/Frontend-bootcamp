import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Players
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          {user.roles.includes("Admin") && (
            <li>
              <Link to="/player/create">Create Player</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
