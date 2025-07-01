import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../Styling/login-page.css"
import { useAuth } from "./AuthContext"
import Navbar from "../Components/Navbar"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:5206/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        login()
        navigate("/")
      } else {
        const data = await response.json()
        setError(data.message || "Login failed")
      }
    } catch (err) {
      setError("Server not reachable")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Login</h1>
            <p className="login-description">Enter your credentials to access your account</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login-content">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <div className="password-header">
                  <label htmlFor="password">Password</label>
                  <a href="/forgot-password" className="forgot-password">
                    Forgot password?
                  </a>
                </div>
                <div className="password-input-container">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              {error && <div className="error-message">{error}</div>}
            </div>
            <div className="login-footer">
              <button type="submit" className="login-button" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log in"}
              </button>
              <div className="signup-prompt">
                Don't have an account?{" "}
                <a href="/register" className="signup-link">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
