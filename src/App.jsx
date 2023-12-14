import React from "react";
import Navbar from "./Navbar.jsx";
import Homepage from "./Homepage.jsx";
// import Service from "./Service.jsx";
// index.js or App.js
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <>
      {/* <Service/> */}
      {/* <About /> */}
      {/* <Homepage /> */}
      {/* <Service/> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/contact-us" element={<C />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
