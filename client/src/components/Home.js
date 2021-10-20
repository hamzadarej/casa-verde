import React from 'react';
import { Link } from 'react-router-dom';
import HomeData from '../home.json';

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

const homeElements = HomeData.map((obj) => {
  const { id, name, path, img } = obj;
    return (
      <li key={id}>
      <Link to={path}>
        {name}
      </Link>
    </li>
    );
});


  return (
    <div>
     <div>
      <div>Here comes the roof of the house</div>
      <h1>Casa Verde</h1>
      <p>RAUM FÜR IDEEN</p>
      </div>
      <ul>
      {homeElements}
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
