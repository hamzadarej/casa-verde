import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
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
    return (
        <div className="whatever">
          <nav>
            <h1 class="logo" style={{ textAlign: 'center' }}>
              Casa Verde
            </h1>
            <ul style={stylingObject.ul}>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/'}>
                  Home
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/about'}>
                  About
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/blog'}>
                  Blog
                </Link>
              </li>
              <li style={stylingObject.li}>
                <Link style={stylingObject.a} to={'/products'}>
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default Nav
