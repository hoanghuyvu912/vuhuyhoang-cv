import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./MainNavigation.scss";

export default function MainNavigation() {
  const [active, setActive] = useState(null);

  const navItemArr = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Me", path: "/about-me" },
    { id: 3, name: "Education", path: "/education" },
    { id: 4, name: "Experience", path: "/experience" },
    { id: 5, name: "Skills", path: "/skills" },
    { id: 6, name: "Contact", path: "/contact" },

  ];

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const renderNavItem = navItemArr.map((e) => {
    return (
      <div
        key={e.id}
        style={{
          width: `${100 / navItemArr.length}%`,
          textAlign: "center",
          cursor: "pointer",
        }}
        className={`header-item ${active == e.id && "active"}`}
        onClick={() => {
          handleNavigate(e.path);
          setActive(e.id);
        }}
      >
        {e.name}
      </div>
    );
  });

  return (
    <header id="header">
      {/* <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-me"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About me
            </NavLink>
          </li>
        </ul>
      </nav> */}
      {renderNavItem}
    </header>
  );
}
