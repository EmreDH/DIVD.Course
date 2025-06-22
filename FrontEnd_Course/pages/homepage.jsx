import Navbar from "../Components/Navbar"
import "../Styling/homepage.css"

export default function Homepage() {
  return (
    <div className="homepage">
      <Navbar />

      <section className="hero-section">
        <div className="hero-content">
          <h1>Learn Cybersecurity Skills for the Digital Age</h1>
          <p>Comprehensive courses designed by industry experts to help you master digital security</p>
          <div className="hero-buttons">
            <button className="primary-button">Explore Courses</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/css.png" alt="Cybersecurity" />
        </div>
      </section>

      <section className="features-section">
        <h2>Our Featured Courses</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Network Security</h3>
            <p>Learn how to secure networks against unauthorized access and attacks</p>
            <a href="/course/network-security" className="feature-link">
              View Course
            </a>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Ethical Hacking</h3>
            <p>Master the techniques used by hackers to better defend against them</p>
            <a href="/course/ethical-hacking" className="feature-link">
              View Course
            </a>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Cryptography</h3>
            <p>Understand encryption and how to implement secure communication channels</p>
            <a href="/course/cryptography" className="feature-link">
              View Course
            </a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>Why Choose DIVD?</h2>
          <p>
            DIVD is dedicated to improving digital security through education and awareness. Our courses are designed by
            industry professionals with years of experience in the field.
          </p>
          <ul className="about-list">
            <li>Expert instructors with real-world experience</li>
            <li>Hands-on practical exercises and labs</li>
            <li>Up-to-date content reflecting current threats</li>
            <li>Flexible learning options to fit your schedule</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="/about-image.png" alt="DIVD Team" />
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "The courses at DIVD have completely transformed my understanding of cybersecurity. I now feel confident
              in my ability to protect digital assets."
            </p>
            <div className="testimonial-author">
              <img src="/avatar.png" alt="Student" className="testimonial-avatar" />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Security Analyst</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              "As someone transitioning into cybersecurity, DIVD provided me with practical skills that I could
              immediately apply in my new role."
            </p>
            <div className="testimonial-author">
              <img src="/avatar2.png" alt="Student" className="testimonial-avatar" />
              <div>
                <h4>Michael Chen</h4>
                <p>IT Professional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your Cybersecurity Journey?</h2>
        <p>Join thousands of students who have advanced their careers with DIVD</p>
        <button className="primary-button">Enroll Now</button>
      </section>

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: question@divd.nl</p>
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

