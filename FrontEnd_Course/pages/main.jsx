import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Homepage from "./homepage"
import LoginPage from "./login-page"
import ContactPage from "./ContactPage"
import AboutPage from "./AboutPage"
import RegisterPage from "./registerpage"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
