import React from 'react';
import '../assets/css/Electors_Home.css';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';

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
      
      

      {/* Main Content Area */}
      <main className="main-content">
        {/* Banner Image Section */}
        <section className="banner">
          <img 
            src="https://www.euroschoolindia.com/blogs/wp-content/uploads/2024/05/lok-sabha-election.webp" 
            alt="Electoral Services Banner" 
            className="banner-image"
            onError={handleImageError}
          />
        </section>
        
        {/* Main Content Section */}
        <section className="main-container">
          <div className="image-box">
            <img 
              src="https://asiasociety.org/sites/default/files/styles/1200w/public/I/india_election.jpg" 
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
                <Link to="/Register">
                  <span className="option-text">Register in Electoral Roll</span>
                  <span className="option-arrow">→</span>
                </Link>
              </li>
              
              <li className="option-item">
                <Link to="/DownloadEpic">
                  <span className="option-text">Download E-EPIC</span>
                  <span className="option-arrow">→</span>
                </Link>
              </li>
              
              <li className="option-item">
                <Link to="/UpdateDetails">
                  <span className="option-text">Update your details</span>
                  <span className="option-arrow">→</span>
                </Link>
              </li>
              
              <li className="option-item">
                <Link to="/SearchElectoralRoll">
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
              <Link to="/FindPollingBooth" className="info-service-btn">
                Find Station
              </Link>
            </div>

            {/* Download Forms Box */}
            <div className="info-service-box download-forms-box">
              <div className="service-icon">📄</div>
              <h3 className="service-title">Download Forms for Registration</h3>
              <p className="service-description">Access and download voter registration forms and documents</p>
              <Link to= "https://www.eci.gov.in/eci-backend/public/api/download?url=LMAhAK6sOPBp%2FNFF0iRfXbEB1EVSLT41NNLRjYNJJP1KivrUxbfqkDatmHy12e%2FzVx8fLfn2ReU7TfrqYobgIv8V1J3%2FbnvpGaH6lo4J7mSAV4qUrIVTUEqNvgWxR217M%2F6vrKKpsRw%2FZKKIh2KKFNusQDiQOFlUppOzD5JbmjsASjLJ8NpA5eCa2pX1fI6C" className="info-service-btn">
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
         
        </section>
      </main>

      
    </div>
  );
};

export default Electors_Home;
