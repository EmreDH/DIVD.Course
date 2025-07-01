import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../Components/Navbar"
import "../Styling/register.css"

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [currentStep, setCurrentStep] = useState(1)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the terms and conditions")
      setIsLoading(false)
      return
    }

    try {
      const name = `${formData.firstName} ${formData.lastName}`.trim()

      const response = await fetch("http://localhost:5206/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: formData.email,
          password: formData.password,
        }),
      })

      if (response.ok) {
        // Redirect correct via assign (testvriendelijker)
        window.location.assign("/login")
      } else {
        const data = await response.json()
        setError(data.message || "Registration failed")
      }
    } catch (error) {
      setError("Registration failed. Please try again.")
      console.error("Registration error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="register-page">
      <Header />

      <div className="register-main">
        <div className="register-container">
          <div className="register-card">
            <div className="register-header">
              <div className="step-indicator">
                <div className={`step ${currentStep >= 1 ? "active" : ""}`}>1</div>
                <div className="step-line"></div>
                <div className={`step ${currentStep >= 2 ? "active" : ""}`}>2</div>
              </div>
              <h2>Join DIVD Community</h2>
              <p>Start your cybersecurity journey with us today</p>
            </div>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="register-form">
              <div className={`form-step ${currentStep === 1 ? "active" : ""}`}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <div className="input-wrapper">
                      <span className="input-icon">👤</span>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <div className="input-wrapper">
                      <span className="input-icon">👤</span>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <span className="input-icon">✉️</span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <button type="button" className="next-button" onClick={nextStep}>
                  Continue
                  <span className="button-arrow">→</span>
                </button>
              </div>

              <div className={`form-step ${currentStep === 2 ? "active" : ""}`}>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔒</span>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔒</span>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="agreeToTerms">
                    I agree to the{" "}
                    <Link to="/terms" className="terms-link">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="terms-link">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <div className="form-buttons">
                  <button type="button" className="back-button" onClick={prevStep}>
                    ← Back
                  </button>
                  <button type="submit" className="register-button" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="loading-spinner"></span>
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </div>
              </div>
            </form>

            <div className="register-divider">
              <span>Or sign up with</span>
            </div>

            <div className="social-register">
              <button className="social-button google">
                <span className="social-icon">G</span>
                Google
              </button>
              <button className="social-button github">
                <span className="social-icon">⚡</span>
                GitHub
              </button>
            </div>

            <div className="login-prompt">
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Sign in
              </Link>
            </div>
          </div>

          <div className="register-visual">
            <div className="visual-overlay">
              <div className="floating-elements">
                <div className="floating-element shield">🛡️</div>
                <div className="floating-element lock">🔐</div>
                <div className="floating-element key">🔑</div>
                <div className="floating-element network">🌐</div>
              </div>
              <div className="visual-content">
                <h3>Secure Your Digital Future</h3>
                <p>Join thousands of cybersecurity professionals who trust DIVD for their learning journey.</p>
                <div className="stats">
                  <div className="stat">
                    <div className="stat-number">10K+</div>
                    <div className="stat-label">Students</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Courses</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">95%</div>
                    <div className="stat-label">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
