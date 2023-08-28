import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container1">
        <div className="text1">
          <h1>Just</h1>
          <h1>Do</h1>
          <h1>IT</h1>
          <p>
            You'll be amazed to find the best <br />
            designer shoes.
          </p>
        </div>
        <div className="text1">
          <img className="main" src="assets/main.png" alt="nike" />
        </div>

        <div className="text1">
          <h3>NIKE ZOOM AIR</h3>
          <h2>$260</h2>
          <a href="/home">GET IT NOW</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
