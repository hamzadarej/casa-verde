import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Logout = () => {
  const logOut = () => {
    axios.get("user/logout").then((res) => {
      console.log(res);
    });
  };
  let history = useHistory();
  const redirect = () => {
    history.push("/login");
  };
  return (
    <div>
      <button
        onClick={() => {
          logOut();
          localStorage.clear();
          redirect();
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Logout;
