import React from "react";
import logo from "/DIVD-Logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="DIVD Logo" className="logo" />


      <ul className="nav-links">
        {["Home", "Course", "About us", "Contact", "Sign in"].map((item) => (
          <li key={item} className="nav-item">{item}</li>
        ))}
      </ul>
    </nav>
  );
}
