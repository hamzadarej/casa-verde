import React from 'react';
import { Link } from 'react-router-dom';
import NavPath from '../nav-path.json';

const Nav = () => {
  
  const navPath = NavPath.map((obj) => {
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
          <ul>{navPath}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
