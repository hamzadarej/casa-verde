import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../menu.json';

const Nav = () => {

  const navMenu = Menu.map((obj) => {
    const { id, name, path } = obj;
    return (
      <li key={id}>
        <Link  to={path}>
          {name}
        </Link>
      </li>
    );
  });

  return (
    <header>
        <nav>
         <div className="logo">
           img goes here
         </div>
         <div>
            <div className="hamburger-menu">
              <div className="menu-top"></div>
              <div className="menu-center"></div>
              <div className="menu-bottom"></div>
            </div>
            <ul>{navMenu}</ul>
          </div>
        </nav>
    </header>
  );
};

export default Nav;
