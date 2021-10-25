import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Menu from '../menu.json';

const Nav = () => {

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);


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

  const showMenu = () => {
    setOpen(open);
    setClose(!close);
  }

  return (
    <header>
        <nav>
         <div className="logo">
           img goes here
         </div>
         <div>
            <div className={close ? "hamburger close" : "hamburger open"} onClick={showMenu}>
              <div className="menu-roof"></div>
              <div className="menu-top"></div>
              <div className="menu-center"></div>
              <div className="menu-bottom"></div>
            </div>
            <ul>{navMenu}</ul>
          </div>
        </nav>
    </header>
  );
};

export default Nav;
