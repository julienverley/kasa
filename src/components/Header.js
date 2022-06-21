import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { home, about } from '../routes';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <NavLink to={home}>
          <Logo />
        </NavLink>
      </div>
      <div className="navigation">
        <ul>
          <NavLink
            to={home}
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to={about}
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
