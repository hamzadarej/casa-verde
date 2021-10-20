import React from 'react';
import { Link } from 'react-router-dom';
import NavPath from '../nav-path.json';

const Home = () => {

//   const homeElements = NavPath.filter((el) => el.position === center).map((data, index) => {
//     const { id, name, path } = data;
//       return (
//       <li key={id}>
//         <Link to={path}>
//           {name}
//         </Link>
//       </li>
//     );
//   });
//   console.log("hello there!");
// console.log(homeElements);
  return (
    <div>
      <h1>Welcome to our Home page</h1>
      <ul>
      {/* {homeElements} */}
      {/* {
        NavPath.filter((el) => el.position === center).map((data, index) => {
          const { id, name, path } = data;
            return (
            <li key={id}>
              <Link to={path}>
                {name}
              </Link>
            </li>
          );
        })
      } */}
      </ul>
    </div>
  );
};

export default Home;
