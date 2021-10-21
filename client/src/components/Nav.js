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
      <div className="whatever">
        <nav>
         <div>
           img goes here
         </div>
          <ul>{navMenu}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
