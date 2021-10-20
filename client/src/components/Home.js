import React from 'react';
import { Link } from 'react-router-dom';
import NavPath from '../nav-path.json';

const Home = ({position}) => {

  const homeElements = NavPath.filter((el) => el.position === position).map((obj) => {
    const { id, name, path } = obj;
      return (
      <li key={id}>
        <Link to={path}>
          {name}
        </Link>
      </li>
    );
  });
// console.log(homeElements);
  return (
    <div>
      <h1>Welcome to our Home page</h1>
      <ul>
      {homeElements}
      </ul>
    </div>
  );
};

export default Home;
