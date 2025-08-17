import React from 'react';
import '../assets/css/Home.css'; // Updated path

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png" 
            alt="Government of India Emblem" 
            className="emblem"
          />
          <div className="header-text">
            <h1>Election Commission of India</h1>
            <p>भारत निर्वाचन आयोग</p>
            <p className="tagline">Democracy's Guardian</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Image Gallery Section */}
      <section className="image-gallery">
        <div className="container">
          <h2>Election Commission of India</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1586027525513-c02d71d31065?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Voting Process" 
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3>Democratic Process</h3>
                <p>Ensuring fair and transparent elections</p>
              </div>
            </div>
            
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Indian Parliament" 
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3>Parliament House</h3>
                <p>The seat of Indian democracy</p>
              </div>
            </div>
            
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Voting Machine" 
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3>Electronic Voting</h3>
                <p>Modern voting technology</p>
              </div>
            </div>
            
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Indian Flag" 
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3>Unity in Diversity</h3>
                <p>Celebrating Indian democracy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="intro-section">
            <h2>Welcome to Election Commission of India</h2>
            <p>
              The Election Commission of India is an autonomous constitutional authority 
              responsible for administering Union and State election processes in India.
            </p>
          </div>

          {/* Services Section */}
          <section className="services-section">
            <h2>Our Services</h2>
            <div className="services-grid">
              
              {/* Electors */}
              <div className="service-card">
                <div className="service-icon">
                  <i className="icon-users">👥</i>
                </div>
                <h3>Electors</h3>
                <p>
                  Voter registration, electoral roll management, and elector services.
                  Find your name in voter list and update voter information.
                </p>
                <a href="/Electors_Home" className="service-link">
                  Learn More →
                </a>
              </div>

              {/* Political Parties */}
              <div className="service-card">
                <div className="service-icon">
                  <i className="icon-party">🏛️</i>
                </div>
                <h3>Political Parties</h3>
                <p>
                  Registration of political parties, symbol allotment, and party 
                  recognition procedures for national and state parties.
                </p>
                <a href="/political-parties" className="service-link">
                  Learn More →
                </a>
              </div>

              {/* Election Management */}
              <div className="service-card">
                <div className="service-icon">
                  <i className="icon-ballot">🗳️</i>
                </div>
                <h3>Election Management</h3>
                <p>
                  Conduct of elections, EVM management, polling procedures, 
                  and result declaration for fair and transparent elections.
                </p>
                <a href="/election-management" className="service-link">
                  Learn More →
                </a>
              </div>

              {/* Media Management */}
              <div className="service-card">
                <div className="service-icon">
                  <i className="icon-media">📺</i>
                </div>
                <h3>Media Management</h3>
                <p>
                  Media guidelines, press releases, election coverage regulations, 
                  and communication with media during election periods.
                </p>
                <a href="/Media_Publication_Home" className="service-link">
                  Learn More →
                </a>
              </div>

              {/* Voter Education */}
              <div className="service-card">
                <div className="service-icon">
                  <i className="icon-education">📚</i>
                </div>
                <h3>Voter Education</h3>
                <p>
                  SVEEP programs, voter awareness campaigns, educational materials, 
                  and initiatives to increase voter participation.
                </p>
                <a href="/voter-education" className="service-link">
                  Learn More →
                </a>
              </div>

            </div>
          </section>

          {/* Quick Links */}
          <section className="quick-links">
            <h2>Quick Links</h2>
            <div className="links-grid">
              <a href="/voter-search" className="quick-link">Search Your Name in Voter List</a>
              <a href="/download-forms" className="quick-link">Download Forms</a>
              <a href="/election-schedule" className="quick-link">Election Schedule</a>
              <a href="/results" className="quick-link">Election Results</a>
              <a href="/grievance" className="quick-link">Grievance Portal</a>
              <a href="/candidate-affidavit" className="quick-link">Candidate Affidavits</a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Information</h3>
              <p>Nirvachan Sadan, Ashoka Road</p>
              <p>New Delhi - 110001</p>
              <p>Phone: 011-23052205</p>
              <p>Email: complaints@eci.gov.in</p>
            </div>
            <div className="footer-section">
              <h3>Important Links</h3>
              <ul>
                <li><a href="/rti">RTI</a></li>
                <li><a href="/acts-rules">Acts & Rules</a></li>
                <li><a href="/tenders">Tenders</a></li>
                <li><a href="/careers">Careers</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="YouTube">📺</a>
                <a href="#" aria-label="Instagram">📷</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Election Commission of India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
