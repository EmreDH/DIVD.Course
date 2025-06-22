import { useState } from "react"
import "../Styling/login-page.css"
import Navbar from "../Components/Navbar"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      console.log("Login attempt with:", { email, password })
    }, 1000)
  }

  return (
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
                <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
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
  )
}