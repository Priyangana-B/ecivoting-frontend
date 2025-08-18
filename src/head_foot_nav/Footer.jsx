import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About ECI</a>
                </li>
                <li>
                  <a href="#elections">Elections</a>
                </li>
                <li>
                  <a href="#results">Results</a>
                </li>
                <li>
                  <a href="#media">Media Center</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#voter-registration">Voter Registration</a>
                </li>
                <li>
                  <a href="#electoral-roll">Electoral Roll</a>
                </li>
                <li>
                  <a href="#political-parties">Political Parties</a>
                </li>
                <li>
                  <a href="#candidates">Candidates</a>
                </li>
                <li>
                  <a href="#election-expenditure">Election Expenditure</a>
                </li>
                <li>
                  <a href="#grievances">Grievances</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#forms">Forms & Applications</a>
                </li>
                <li>
                  <a href="#guidelines">Guidelines</a>
                </li>
                <li>
                  <a href="#acts-rules">Acts & Rules</a>
                </li>
                <li>
                  <a href="#reports">Reports</a>
                </li>
                <li>
                  <a href="#statistics">Statistics</a>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Information</h3>
              <div className="contact-info">
              <p><strong>Election Commission</strong></p>
              <p>Nirvachan Bhavan</p>
              <p>Administrative Zone, New Delhi</p>
              <p>Phone: +91-11-00000000</p> 
              <p>Email: support@eci-demo.gov.in</p>

              </div>
             <div className="social-links">
            <a href="https://www.facebook.com/ECI/" className="social-link" aria-label="Facebook" target="_blank" 
            rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://x.com/ecisveep?lang=en" className="social-link" aria-label="Twitter" target="_blank" 
            rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UCGdsgdPfwnwYF1l8YTFkknA" className="social-link" aria-label="YouTube" target="_blank" 
            rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/ecisveep/?hl=en" className="social-link" aria-label="Instagram" target="_blank" 
              rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>

            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Election Commission. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#accessibility">Accessibility</a>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
