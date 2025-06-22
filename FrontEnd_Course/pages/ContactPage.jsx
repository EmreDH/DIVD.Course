import { useState } from "react"
import Navbar from "../Components/Navbar"
import "../Styling/contact.css"

const ContactPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null)

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null)
    } else {
      setActiveQuestion(index)
    }
  }

  const faqItems = [
    {
      question: "Is it legal what DIVD is doing?",
      answer:
        "Dutch jurisprudence is clear: if you address a societal need using appropriate methods, you are permitted to execute minor hacks to prevent more damaging ones. The Dutch Public Prosecution Office and the National Cyber Security Center endorse our approach.",
    },
    {
      question: "Why did I receive an email from DIVD / CSIRT?",
      answer:
        "If you received an email from DIVD CSIRT, it means we've discovered a vulnerability in a system that appears to be under your management. We're reaching out to help you address this security issue before it can be exploited by malicious actors.",
    },
    {
      question: "Who works for DIVD?",
      answer:
        "DIVD consists of a network of volunteer security researchers and professionals who are passionate about making the digital world safer. Our team includes ethical hackers, security analysts, and IT professionals who donate their time and expertise.",
    },
    {
      question: "What kinds of vulnerabilities do you report?",
      answer:
        "We report a wide range of vulnerabilities that could potentially be exploited by malicious actors. These include but are not limited to: exposed databases, misconfigured servers, outdated software with known security flaws, and weak authentication systems.",
    },
    {
      question: "How can I contribute to this initiative?",
      answer:
        "There are several ways to contribute to DIVD. You can join as a volunteer researcher if you have security expertise, provide financial support through donations, help with administrative tasks, or simply spread awareness about our work and the importance of cybersecurity.",
    },
  ]

  return (
    <div className="contact-page">
      <Navbar />

      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>How to get in contact with us</h1>
          <p className="contact-hero-description">
            We are a group of volunteers that scout the web for potential cyber security risks.
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="faq-section">
          <h2>Frequently asked questions</h2>
          <p>
            If this F.A.Q. doesn't provide the answer you're looking for, feel free to reach out to us. We strive to
            respond to your queries to the best of our ability.
          </p>

          <div className="faq-buttons">
            <a href="#contact-form" className="contact-button">
              CONTACT
            </a>
            <a href="/faq" className="faq-button">
              ALL FAQ
            </a>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div className="faq-item" key={index}>
                <div
                  className={`faq-question ${activeQuestion === index ? "active" : ""}`}
                  onClick={() => toggleQuestion(index)}
                >
                  <h3>{item.question}</h3>
                  <span className="faq-toggle">{activeQuestion === index ? "−" : "+"}</span>
                </div>
                <div className={`faq-answer ${activeQuestion === index ? "active" : ""}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="office-section">
          <h2>Not a regular office</h2>
          <p>
            We are a network of security researchers who mainly work online. If you need to contact us, please use the
            form below or send an email to contact@divd.nl.
          </p>

          <div className="divd-logo-large">
            <img src="/divd-logo-large.png" alt="DIVD Logo" />
          </div>
        </div>

        <div className="contact-form-section" id="contact-form">
          <h2>Contact Form</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
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

export default ContactPage
