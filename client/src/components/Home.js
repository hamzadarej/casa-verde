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
  const { id, name, path} = obj;
    return (
      <li key={id}>
      <Link to={path}>
        {name}
      </Link>
    </li>
    );
});

const cardElements = HomeData.map((obj) => {
  const { id, name, path, img} = obj;
    return (
      <div key={id}>
        <div>
          <h3>{name}</h3>
          <div>logo</div>
        </div>
        <p>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. 
        </p>
        <img src={img} alt="site images" />
        <div>
         <Link to={path}>
           <button>
           Go to {name}
           </button>
         </Link>
        </div>
     </div>
    );
});


  return (
    <div className="home">
     <div>
      <div className="roof"></div>
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
      {cardElements}
    </div>
  );
};

export default Home;
