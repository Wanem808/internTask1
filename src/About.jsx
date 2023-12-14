import React from "react";
import "./assets/CSS/About.css";
import Image3 from "/home/wanem/Desktop/internTask/src/Images/Image3.jpg";
import Image4 from "/home/wanem/Desktop/internTask/src/Images/Image4.jpg";
import Image5 from "/home/wanem/Desktop/internTask/src/Images/Image5.jpg";
import Image6 from "/home/wanem/Desktop/internTask/src/Images/Image6.jpg";
import Image7 from "/home/wanem/Desktop/internTask/src/Images/Image7.jpg";
import Image8 from "/home/wanem/Desktop/internTask/src/Images/Image8.jpg";
const About = () => {
  return (
    <div className="container-fluid  about-us-wrapper">
      <div className="row">
        <div className="col-12">
          <h2>About Us</h2>
        </div>
        <div className="col-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            explicabo ratione optio sit dolores velit culpa sed accusamus! Esse
            neque minima modi reprehenderit. Quibusdam quos hic illo error natus
            quae.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            excepturi rem neque sed maxime ut quam? Quae unde, nesciunt adipisci
            quam, doloribus, eius laborum laboriosam quidem ipsum voluptatem non
            possimus?
          </p>
        </div>
        <div className="col-12">
          <div className="row about-us">
            <div className="col-3">
              <img src={Image3} className="about" alt="My image" />
            </div>
            <div className="col-3">
              <img src={Image4} className="about" alt="My image" />
            </div>{" "}
            <div className="col-3">
              <img src={Image5} className="about" alt="My image" />
            </div>{" "}
            <div className="col-3">
              <img src={Image6} className="about" alt="My image" />
            </div>
            <div className="col-3">
              <img src={Image5} className="about" alt="My image" />
            </div>
            <div className="col-3">
              <img src={Image6} className="about" alt="My image" />
            </div>
            <div className="col-3">
              <img src={Image7} className="about" alt="My image" />
            </div>
            <div className="col-3">
              <img src={Image8} className="about" alt="My image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
