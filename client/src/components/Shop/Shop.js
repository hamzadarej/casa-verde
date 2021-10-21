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
      .get("user/products", config)
      .then((res) => {
        if (res.data) {
          setData(res.data);
        } else {
          setData({});
        }
      })
      .catch((err) => {
        console.log("here", err.message);
      });
  };
  console.log(data);
  //localStorage.setItem("data", JSON.stringify(data));s

  useEffect(() => {
    getAllProducts();
  }, []);

  if (data?.auth === false || data.length === 0) {
    return (
      <div>
        <h1>you are logged out </h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
  console.log(data);
  const getProducts = data?.map((obj) => {
    const { _id, category, name, price, description, quantity } = obj;

    return (
      <div
        style={{
          width: "150px",
          height: "200px",
          border: "1px solid red",
          backgroundColor: "yellow",
          fontSize: "18px"
        }}
      >
        {" "}
        <div key={_id}>
          <li>category: {category}</li>
          <li>name: {name}</li>
          <li>price: {price}</li>
          <li>description: {description}</li>
          <li>quantity: {quantity}</li>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1>Hi, I am the Shop Component!!!</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {getProducts}
      </div>
    </div>
  );
}

export default Shop;
