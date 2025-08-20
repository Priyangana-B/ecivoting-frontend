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
    <div className="page-wrapper">
      {/* Hero Section with Overlay */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://www.euroschoolindia.com/blogs/wp-content/uploads/2024/05/lok-sabha-election.webp" 
            alt="Electoral Services Banner" 
            className="hero-image"
            onError={handleImageError}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Electoral Services Portal</h1>
          <p className="hero-subtitle">Your gateway to democratic participation</p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="content-container">
        
        {/* 1. Information Hub Section */}
        <section className="info-hub">
          <div className="section-header">
            <h2 className="section-title">Information Hub</h2>
            <p className="section-subtitle">Everything you need to know about elections</p>
          </div>
          
          <div className="featured-info-card">
            <div className="featured-info">
              <img 
                src="https://asiasociety.org/sites/default/files/styles/1200w/public/I/india_election.jpg" 
                alt="Election Process" 
                className="featured-image"
                onError={handleImageBoxError}
              />
              <div className="featured-content">
                <h3 className="featured-title">Your Voice Matters</h3>
                <p className="featured-text">
                  Participate in democracy through informed voting. Access all electoral 
                  services and information you need to make your voice heard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Services Section */}
        <section className="quick-services">
          <div className="section-header">
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">Fast access to essential electoral services</p>
          </div>
          
          <div className="services-list-container">
            <ul className="services-list">
              <li className="service-item">
                <Link to="/Register" className="service-link">
                  <div className="service-content">
                    <div className="service-icon">📝</div>
                    <div className="service-info">
                      <h3 className="service-name">Register in Electoral Roll</h3>
                      <p className="service-desc">Join the electoral roll and become an eligible voter</p>
                    </div>
                  </div>
                  <span className="service-arrow">→</span>
                </Link>
              </li>
              
              <li className="service-item">
                <Link to="/DownloadEpic" className="service-link">
                  <div className="service-content">
                    <div className="service-icon">📩</div>
                    <div className="service-info">
                      <h3 className="service-name">Download E-EPIC</h3>
                      <p className="service-desc">Get your digital voter ID card instantly</p>
                    </div>
                  </div>
                  <span className="service-arrow">→</span>
                </Link>
              </li>
              
              <li className="service-item">
                <Link to="/UpdateDetails" className="service-link">
                  <div className="service-content">
                    <div className="service-icon">✏️</div>
                    <div className="service-info">
                      <h3 className="service-name">Update Your Details</h3>
                      <p className="service-desc">Modify your personal information in the electoral roll</p>
                    </div>
                  </div>
                  <span className="service-arrow">→</span>
                </Link>
              </li>
              
              <li className="service-item">
                <Link to="/SearchElectoralRoll" className="service-link">
                  <div className="service-content">
                    <div className="service-icon">🔍</div>
                    <div className="service-info">
                      <h3 className="service-name">Search Electoral Roll</h3>
                      <p className="service-desc">Find voter information and verify registration status</p>
                    </div>
                  </div>
                  <span className="service-arrow">→</span>
                </Link>
              </li>

              <li className="service-item">
                <Link to="/DeleteApplication" className="service-link">
                  <div className="service-content">
                    <div className="service-icon">🗑️</div>
                    <div className="service-info">
                      <h3 className="service-name">Deletion</h3>
                      <p className="service-desc">Remove or delete voter registration application</p>
                    </div>
                  </div>
                  <span className="service-arrow">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* 3. Quick Links Section */}
        <section className="quick-links">
          <div className="section-header">
            <h2 className="section-title">Quick Links</h2>
            <p className="section-subtitle">Fast access to important information</p>
          </div>
          
          <div className="quick-links-card">
            <div className="info-cards-grid">
              <div className="info-card polling-card">
                <div className="card-icon">📍</div>
                <h4 className="card-title">Know Your Polling Station</h4>
                <p className="card-text">Find your designated polling location and get directions</p>
                <Link to="/FindPollingBooth" className="card-link">Find Station</Link>
              </div>
              
              <div className="info-card forms-card">
                <div className="card-icon">📄</div>
                <h4 className="card-title">Download Forms for Registration</h4>
                <p className="card-text">Access and download voter registration forms and documents</p>
                <Link to="https://www.eci.gov.in/eci-backend/public/api/download?url=LMAhAK6sOPBp%2FNFF0iRfXbEB1EVSLT41NNLRjYNJJP1KivrUxbfqkDatmHy12e%2FzVx8fLfn2ReU7TfrqYobgIv8V1J3%2FbnvpGaH6lo4J7mSAV4qUrIVTUEqNvgWxR217M%2F6vrKKpsRw%2FZKKIh2KKFNusQDiQOFlUppOzD5JbmjsASjLJ8NpA5eCa2pX1fI6C" className="card-link">Get Forms</Link>
              </div>
              
              <div className="info-card candidates-card">
                <div className="card-icon">👥</div>
                <h4 className="card-title">Know Your Candidate</h4>
                <p className="card-text">Learn about candidates running in your constituency</p>
                <Link to="/candidate-info" className="card-link">View Candidates</Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Electors_Home;
