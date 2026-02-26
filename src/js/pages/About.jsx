import React from "react";

const About = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0 vh-100">
        <div
          className="col-md-8  text-white d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "blueviolet" }}
        >
          <h1>Left Side</h1>
        </div>
        <div className="col-md-4 bg-dark text-white d-flex align-items-center justify-content-center">
          <h1>Right Side</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
