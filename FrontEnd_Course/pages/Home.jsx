import React from "react";
import Navbar from "../Components/Navbar";
import '../Styling/App.css';
import '../Styling/HomePage.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="title">
          Welcome to <span className="highlight">DIVD</span> Course
        </h1>
        <img src="/d_right.png" alt="DIVD Course" className="image" />
        <img src="/csirt.png" alt="DIVD Course" className="image" />
        <img src="/d_left.svg" alt="DIVD Course" className="image" />
        
        <div className="buttons-container">
          <button className="btn explore-btn">Explore Courses</button>
          <button className="btn signup-btn">Sign Up</button>
        </div>
        
        <div className="info-bar">
          <h2 className="info-bar-title">Are you interested in:</h2>
          <p className="info-bar-content">
            By enabling and empowering aspiring ethical hackers and cybersecurity enthusiasts, 
            DIVD Academy stands as a beacon of cutting-edge education, 
            fostering knowledge, skills, 
            and ethical awareness among young talent while guiding at-risk youth toward a positive impact in cybersecurity and IT education, 
            shaping a safer digital future for all.
            <br /><br />
            Are you interested in cybersecurity and would you like to come take a look? 
            Feel free to come talk to the DIVD Community.
            <br /><br />
            The platform provides a comprehensive range of free courses and training materials 
            covering fundamental IT education, networking, Kubernetes, security, automation, 
            programming in various languages like JavaScript, Python, and PHP, DevOps skills, 
            GitHub operations, code security, and data science essentials. 
            This diverse curriculum caters to beginners starting their careers, offering basic 
            IT education, networking, cybersecurity training, ethical hacking, automation, 
            programming and data analytics.
          </p>
        </div>
        <div className="mission-bar">
          <h2 className="mission-bar-title">Our Mission</h2>
          <p className="mission-bar-content">
            We aim to enhance digital safety by reporting system vulnerabilities to the relevant authorities. 
            With a global reach, we adopt an open, honest, and collaborative approach, 
            providing our services for free.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
