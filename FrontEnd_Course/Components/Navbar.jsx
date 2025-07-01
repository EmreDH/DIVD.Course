import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../pages/AuthContext"
import "../Styling/navbar.css"

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home")
  const { isLoggedIn, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="navbar">
      <img src="/DIVD-Logo.png" alt="DIVD Logo" className="logo" />
      <ul className="nav-links">
        <li className={`nav-item ${activeItem === "home" ? "active" : ""}`}>
          <Link to="/" onClick={() => setActiveItem("home")}>Home</Link>
        </li>
        <li className={`nav-item ${activeItem === "courses" ? "active" : ""}`}>
          <Link to="/courses" onClick={() => setActiveItem("courses")}>Courses</Link>
        </li>
        <li className={`nav-item ${activeItem === "about" ? "active" : ""}`}>
          <Link to="/about" onClick={() => setActiveItem("about")}>About</Link>
        </li>
        <li className={`nav-item ${activeItem === "contact" ? "active" : ""}`}>
          <Link to="/contact" onClick={() => setActiveItem("contact")}>Contact</Link>
        </li>

        {!isLoggedIn ? (
          <li className="nav-item highlight">
            <Link to="/login" onClick={() => setActiveItem("login")}>Login</Link>
          </li>
        ) : (
          <li className="nav-item highlight">
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
