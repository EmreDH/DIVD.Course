import React from "react";
import logo from "/DIVD-Logo.png"; // Zorg ervoor dat de juiste pad klopt

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo als afbeelding */}
      <img src={logo} alt="DIVD Logo" className="logo" />

      {/* Navigatie links */}
      <ul className="nav-links">
        {["Home", "Course", "About us", "Contact", "Sign up"].map((item) => (
          <li key={item} className="nav-item">{item}</li>
        ))}
      </ul>
    </nav>
  );
}
