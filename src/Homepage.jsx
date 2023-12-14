import React from "react";
import "./assets/CSS/Homepage.css";
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the '/about' route
    navigate('/service');
  };
  return (
    <div className="container-home-page">
      <div className="content">
        <h1>Lawyer</h1>
        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          praesentium neque ex soluta. Quia in voluptatem, perferendis
          repellendus tempore a doloremque quam officiis atque deserunt autem
          dolorum? Animi, omnis quod!
        </p>
        <button  onClick={handleButtonClick}>
          <span class="followers">Our Services</span>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
