import React, { Component } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/useeffectandusestate">UseEffect_UseState</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
