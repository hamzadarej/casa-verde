import React from 'react';
import { Link } from 'react-router-dom';
import NavPath from '../nav-path.json';

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
        </nav>
      </div>
    </header>
  );
};

export default Nav;
