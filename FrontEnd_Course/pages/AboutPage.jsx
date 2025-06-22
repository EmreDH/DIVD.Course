import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"
import "../Styling/about.css"

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleSection = (index) => {
    if (activeSection === index) {
      setActiveSection(null)
    } else {
      setActiveSection(index)
    }
  }

  const aboutSections = [
    {
      title: "What is DIVD?",
      icon: "🛡️",
      content:
        "The Dutch Institute for Vulnerability Disclosure (DIVD) is a volunteer-driven organization dedicated to making the digital world safer. We identify vulnerabilities in digital systems and notify the owners before malicious actors can exploit them. Our mission is to help create a safer digital society through responsible disclosure and education.",
    },
    {
      title: "Our History",
      icon: "📚",
      content:
        "DIVD was founded in 2019 by a group of security researchers who recognized the need for a coordinated approach to vulnerability disclosure. Since then, we have grown into a respected organization that has helped secure thousands of systems worldwide. Our work has been recognized by government agencies, corporations, and security professionals around the globe.",
    },
    {
      title: "Our Approach",
      icon: "🎯",
      content:
        "We believe in responsible disclosure. When we discover a vulnerability, we follow a careful process: First, we verify the issue. Then, we notify the system owner with clear instructions on how to fix it. We provide a reasonable timeframe for them to address the issue before any public disclosure. This approach minimizes risk while ensuring that vulnerabilities are addressed.",
    },
    {
      title: "Our Team",
      icon: "👥",
      content:
        "DIVD consists of a diverse group of security researchers, ethical hackers, IT professionals, and volunteers who share a passion for cybersecurity. Our team members bring expertise from various backgrounds, including network security, application security, incident response, and digital forensics. We operate as a distributed team, collaborating remotely from different locations.",
    },
    {
      title: "Our Impact",
      icon: "🌍",
      content:
        "Since our founding, we have identified and helped remediate thousands of vulnerabilities across the digital landscape. Our work has protected millions of users from potential data breaches and cyber attacks. We regularly publish reports on our findings to help educate the broader community about emerging security threats and best practices for prevention.",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Vulnerabilities Found", icon: "🔍" },
    { number: "500+", label: "Organizations Helped", icon: "🏢" },
    { number: "50+", label: "Countries Reached", icon: "🌐" },
    { number: "100+", label: "Volunteers", icon: "👨‍💻" },
  ]

  return (
    <div className="about-page">
      <Navbar />

      <div className="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className="separator">→</span> <span>About DIVD</span>
          </div>
          <h1 className={`hero-title ${isVisible ? "animate-in" : ""}`}>About DIVD</h1>
          <p className={`hero-subtitle ${isVisible ? "animate-in" : ""}`}>
            Making the digital world safer, one vulnerability at a time
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="intro-section">
            <div className="intro-text">
              <p className="about-intro">
                We are a group of security researchers who aim to make the digital world a safer place by finding and
                reporting vulnerabilities before they can be exploited by malicious actors.
              </p>
              <p className="about-description">
                If you have questions that aren't answered here, feel free to reach out to us. We strive to respond to
                your queries to the best of our ability.
              </p>
            </div>
            <div className="intro-visual">
              <div className="security-badge">
                <div className="badge-icon">🔐</div>
                <div className="badge-text">
                  <div className="badge-title">Trusted Security</div>
                  <div className="badge-subtitle">Since 2019</div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <h2 className="section-title">Our Impact in Numbers</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div className="stat-card" key={index}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mission-section">
            <h2 className="section-title">Our Mission</h2>
            <div className="about-sections">
              {aboutSections.map((section, index) => (
                <div className="about-section" key={index}>
                  <div
                    className={`about-section-title ${activeSection === index ? "active" : ""}`}
                    onClick={() => toggleSection(index)}
                  >
                    <div className="section-header">
                      <span className="section-icon">{section.icon}</span>
                      <h3>{section.title}</h3>
                    </div>
                    <span className="section-toggle">{activeSection === index ? "−" : "+"}</span>
                  </div>
                  <div className={`about-section-content ${activeSection === index ? "active" : ""}`}>
                    <p>{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="values-section">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card transparency">
                <div className="value-icon">🔍</div>
                <h3>Transparency</h3>
                <p>We believe in open communication and sharing our findings with the community.</p>
                <div className="card-glow"></div>
              </div>
              <div className="value-card collaboration">
                <div className="value-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>We work together with organizations to address vulnerabilities effectively.</p>
                <div className="card-glow"></div>
              </div>
              <div className="value-card responsibility">
                <div className="value-icon">🛡️</div>
                <h3>Responsibility</h3>
                <p>We follow ethical guidelines and prioritize the security of digital systems.</p>
                <div className="card-glow"></div>
              </div>
              <div className="value-card education">
                <div className="value-icon">📚</div>
                <h3>Education</h3>
                <p>We share knowledge to help others improve their security practices.</p>
                <div className="card-glow"></div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <div className="cta-content">
              <h2>Ready to Join Our Mission?</h2>
              <p>
                If you'd like to get in touch with DIVD, please visit our contact page or send an email to
                contact@divd.nl.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="cta-button primary">
                  Contact Us
                </Link>
                <Link to="/register" className="cta-button secondary">
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="homepage-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DIVD</h3>
            <p>Empowering individuals and organizations with the knowledge to secure the digital world.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: contact@divd.nl</p>
            <p>Phone: (+31) 70 41 90 309</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                FB
              </a>
              <a href="#" className="social-icon">
                TW
              </a>
              <a href="#" className="social-icon">
                IG
              </a>
              <a href="#" className="social-icon">
                LI
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DIVD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default AboutPage
