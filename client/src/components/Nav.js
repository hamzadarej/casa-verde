import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Menu from "../menu.json";
import { DataContext } from "./Context";
import {FiLogOut} from "react-icons/fi"

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const [none, setNone] = useState(true);
//use the context
  const [token, setToken] = useContext(DataContext);
  const navMenu = Menu.map((obj) => {
    const { id, name, path } = obj;
    return (
      <li key={id}>
        <Link to={path}>{name}</Link>
      </li>
    );
  });

  const showMenu = () => {
    setOpen(open);
    setClose(!close);
    setNone(!none);
  };
  //logout
  const logOut = () => {
    setToken("")
    localStorage.clear();
    redirect();
  };
  // redirect to login when its logged out
  let history = useHistory();
  const redirect = () => {
    history.push("/login");
  };

  return (
    <header>
      <nav>
        <div className="nav-top">
          <div className="logo">img goes here</div>
          
          <div  >
            {token ? (
              <>
                {" "}
                <div style={{color:"black" , fontWeight:"bold" ,textDecoration:"none", cursor:"pointer" }} onClick={logOut} alt="logout"><FiLogOut/></div>
              </>
            ) : (
              <>
                {" "}
                <Link style={{color:"black" , fontWeight:"bold" ,textDecoration:"none"}}to="/login">sign in</Link>
                {"  "}
                <Link style={{color:"black" , fontWeight:"bold" ,textDecoration:"none"}}to="/register">sign up</Link>
              </>
            )}
          </div>
          <div
            className={close ? "hamburger close" : "hamburger open"}
            onClick={showMenu}
          >
            <div className="menu-roof"></div>
            <div className="menu-top"></div>
            <div className="menu-center"></div>
            <div className="menu-bottom"></div>
          </div>
        </div>
        <ul className={none ? "none" : "show"} onClick={showMenu}>
          {navMenu}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
