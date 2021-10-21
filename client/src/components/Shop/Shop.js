// Test comment
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [data, setData] = useState([]);

  const getAllProducts = () => {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get("admin/users", config)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("here", err.message);
      });
  };
  localStorage.setItem("data", JSON.stringify(data));

  useEffect(() => {
    getAllProducts();
  }, []);

  if (!data?.auth) {
    return (
      <div>
        <h1>you are logged out </h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Hi, I am the Shop Component!!!</h1>
    </div>
  );
}

export default Shop;
