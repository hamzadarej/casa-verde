import React from 'react';
import { Link } from 'react-router-dom';
import NavPath from '../nav-path.json';

const Home = () => {

  const navPath = NavPath.map((obj) => {
    const { id, name, path } = obj;
      return (
      <li key={id}>
        <Link to={path}>
          {name}
        </Link>
      </li>
    );
  });
// console.log(navPath);
  return (
    <div>
      <h1>Welcome to our Home page</h1>
      <ul>
      {navPath}
      </ul>
    </div>
  );
};

export default Home;
