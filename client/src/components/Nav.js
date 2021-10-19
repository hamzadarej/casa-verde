import React from 'react';
import { Link } from 'react-router-dom';
import NavPath from '../nav-path.json';
<<<<<<< HEAD
=======
import styled from 'styled-components';

const Container = styled.div`
  height: 3.75 rem;
`;
const Right = styled.div``;
const Center = styled.div``;
const Left = styled.div``;
>>>>>>> 949613dcc830da22942590b8943d57589112145f

const Nav = () => {
  const stylingObject = {
    ul: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      fontSize: '2rem',
      gap: '1rem',
    },
    li: {
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
      color: 'gray',
    },
    text: {
      textAlign: 'center',
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
    <header style={{ textAlign: 'center' }}>
      <div className="whatever">
        <nav>
          <h1 class="logo" style={{ textAlign: 'center' }}>
            Casa Verde
          </h1>
<<<<<<< HEAD
          <ul style={stylingObject.ul}>
            {navPath}
            {/* <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/'}>
                  Home
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/shop'}>
                  Shop
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/services'}>
                  Decoration Services
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/events'}>
                  Events
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/rent'}>
                  Rental Services
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/ballet-pilates'}>
                  Ballet & Pilates
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/technic'}>
                  Technical Consulting
                </Link>
              </li> */}
          </ul>
=======
          <ul style={stylingObject.ul}>{navPath}</ul>
>>>>>>> 949613dcc830da22942590b8943d57589112145f
        </nav>
      </div>
    </header>
  );
};

export default Nav;
