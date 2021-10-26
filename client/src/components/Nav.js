import React from "react";
import { Link } from "react-router-dom";
import NavPath from "../nav-path.json";

const Nav = () => {
  const stylingObject = {
    ul: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      fontSize: "2rem",
      gap: "1rem",
    },
    li: {
      listStyle: "none",
    },
    a: {
      textDecoration: "none",
      color: "gray",
    },
    text: {
      textAlign: "center",
    },
  };

  const navPath = NavPath.map((obj) => {
    const { id, name, path } = obj;
    return (
      <li key={id} style={stylingObject.li}>
        <Link style={stylingObject.a} to={path}>
          {name}
        </Link>
      </li>
    );
  });

  return (
    <header style={{ textAlign: "center" }}>
      <div className="whatever">
        <nav>
          <h1 class="logo" style={{ textAlign: "center" }}>
            Casa Verde
          </h1>
          <ul style={stylingObject.ul}>{navPath}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
