import React from 'react';
import '../assets/css/Electors_Home.css';
import { Link } from 'react-router-dom';

const Electors_Home = () => {
  // Error handler function for images
  const handleImageError = (event) => {
    event.target.src = 'https://placehold.co/1200x200/cccccc/000000?text=Image+Not+Found';
  };

  const handleImageBoxError = (event) => {
    event.target.src = 'https://placehold.co/280x200/cccccc/666666?text=Electoral+Services';
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1 className="portal-title">Electors Portal</h1>
          <nav aria-label="Main navigation">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Banner Image Section */}
        <section className="banner">
          <img 
            src="https://placehold.co/1200x200/3498db/ffffff?text=Electoral+Services+Portal" 
            alt="Electoral Services Banner" 
            className="banner-image"
            onError={handleImageError}
          />
        </section>
        
        {/* Main Content Section */}
        <section className="main-container">
          <div className="image-box">
            <img 
              src="https://placehold.co/280x200/e8f4f8/3498db?text=Voting+Concept" 
              alt="Illustration of voting concept showing diverse people placing ballots into a voting box" 
              className="image-box-img"
              onError={handleImageBoxError}
            />
            <p className="image-caption">Electoral services at your fingertips</p>
          </div>
          
          <div className="options-box">
            <h2 className="services-heading">Services</h2>
            <ul className="options-list">
              <li className="option-item">
                <Link to="/register">
                  <span className="option-text">Register in Electoral Roll</span>
                  <span className="option-arrow">→</span>
                </Link>
              </li>
              
              <li className="option-item">
                <Link to="/download-epic">
                  <span className="option-text">Download E-EPIC</span>
                  <span className="option-arrow">→</span>
                </Link>
              </li>
              
              <li className="option-item">
                <Link to="/update-details">
                  <span className="option-text">Update your details</span>
                  <span className="option-arrow">→</span>
                </Link>
              </li>
              
              <li className="option-item">
                <Link to="/search-electoral-roll">
                  <span className="option-text">Search Electoral Roll</span>
                  <span className="option-arrow">→</span>
                </Link>
              </li>
              
              <li className="option-item">
                <Link to="/DeleteApplication">
                  <span className="option-text">Deletion</span>
                  <span className="option-arrow">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Information Services Section */}
        <section className="info-services-section">
          <div className="info-services-header">
            <h2 className="info-services-title">Information Services</h2>
            <p className="info-services-tagline">Access important electoral information and resources</p>
          </div>

          <div className="info-services-grid">
            {/* Know Your Polling Station Box */}
            <div className="info-service-box polling-station-box">
              <div className="service-icon">📍</div>
              <h3 className="service-title">Know Your Polling Station</h3>
              <p className="service-description">Find your designated polling location and get directions</p>
              <Link to="/polling-station" className="info-service-btn">
                Find Station
              </Link>
            </div>

            {/* Download Forms Box */}
            <div className="info-service-box download-forms-box">
              <div className="service-icon">📄</div>
              <h3 className="service-title">Download Forms for Registration</h3>
              <p className="service-description">Access and download voter registration forms and documents</p>
              <Link to="/registration-forms" className="info-service-btn">
                Get Forms
              </Link>
            </div>

            {/* Know Your Candidate Box */}
            <div className="info-service-box candidate-box">
              <div className="service-icon">👥</div>
              <h3 className="service-title">Know Your Candidate</h3>
              <p className="service-description">Learn about candidates running in your constituency</p>
              <Link to="/candidate-info" className="info-service-btn">
                View Candidates
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="quick-links-section">
            <h3 className="quick-links-title">Quick Access</h3>
            <div className="quick-links-list">
              <Link to="/election-schedule" className="quick-link">Election Schedule</Link>
              <Link to="/voter-guidelines" className="quick-link">Voter Guidelines</Link>
              <Link to="/status-check" className="quick-link">Check Status</Link>
              <Link to="/support" className="quick-link">Support</Link>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Electors_Home;
