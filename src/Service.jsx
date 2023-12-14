import React from "react";
import Image1 from "/home/wanem/Desktop/internTask/src/Images/Image1.jpg";
import Image2 from "/home/wanem/Desktop/internTask/src/Images/Image2.jpg";
import "./assets/CSS/Service.css";
const Service = () => {
  return (
    <div className="container-fluid  ">
      <div className="row d-flex ">
        <div className="col-12 text-center">
          <h2>Our Services</h2>
        </div>
        <div className="col-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptatibus corporis perspiciatis impedit voluptatum ipsa
            repudiandae eum quaerat tempore saepe! Harum obcaecati est deleniti
            assumenda corrupti vel optio necessitatibus temporibus expedita
            dignissimos nihil non molestiae iste facilis beatae itaque nobis
            odio omnis, sint quidem quisquam molestias! Pariatur hic ipsam
            quasi?
          </p>
        </div>

        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <img src={Image1} className="serivce-image" alt="My image" />
            </div>
            <div className="col-6">
              <div className="feature-list">
                <h4 className="feature-list-title">Corporate Law</h4>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <img src={Image2} className="serivce-image" alt="My image" />
            </div>
            <div className="col-6">
              <div className="feature-list">
                <h4>Corporate Law</h4>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
