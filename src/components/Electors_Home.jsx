import React from 'react';
import '../assets/css/Electors_Home.css'; // Updated path


const Electors_Home = () => {
  return (
    <>
      <div>
        {/* <!-- Header Section --> */}
    <header class="header">
        <div class="header-content">
            <h1 class="portal-title">Electors Portal</h1>
            <nav aria-label="Main navigation">
                <ul class="nav-links">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./about/index.html">About</a></li>
                    <li><a href="./contact/index.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    {/* <!-- Main Content Area --> */}
    <main class="main-content">
        {/* <!-- Banner Image Section --> */}
        <section class="banner">
            <img src="https://placehold.co/1200x200/3498db/ffffff?text=Electoral+Services+Portal" 
                 alt="Electoral Services Banner" 
                 class="banner-image"
                 onerror="this.onerror=null; this.src='https://placehold.co/1200x200/cccccc/000000?text=Image+Not+Found';"
            />
        </section>
        
        {/* <!-- Main Content Section: Image Box and Options Box with Hyperlinks --> */}
        <section class="main-container">
            <div class="image-box">
                <img src="https://placehold.co/280x200/e8f4f8/3498db?text=Voting+Concept" 
                     alt="Illustration of voting concept showing diverse people placing ballots into a voting box" 
                     class="image-box-img"
                     onerror="this.onerror=null; this.src='https://placehold.co/280x200/cccccc/666666?text=Electoral+Services';"
                />
                <p class="image-caption">Electoral services at your fingertips</p>
            </div>
            
            <div class="options-box">
                <h2 class="services-heading">Services</h2>
                <ul class="options-list">
                    <li class="option-item">
                        <a href="/Register">
                            <span class="option-text">Register in Electoral Roll</span>
                            <span class="option-arrow">→</span>
                        </a>
                    </li>
                    
                    <li class="option-item">
                        <a href="/DownloadEpic">
                            <span class="option-text">Download E-EPIC</span>
                            <span class="option-arrow">→</span>
                        </a>
                    </li>
                    
                    <li class="option-item">
                        <a href="./UpdateDetails">
                            <span class="option-text">Update your details</span>
                            <span class="option-arrow">→</span>
                        </a>
                    </li>
                    
                    <li class="option-item">
                        <a href="/SearchElectoralRoll">
                            <span class="option-text">Search Electoral Roll</span>
                            <span class="option-arrow">→</span>
                        </a>
                    </li>
                    
                    <li class="option-item">
                        <a href="/DeleteApplication">
                            <span class="option-text">Deletion</span>
                            <span class="option-arrow">→</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

        {/* <!-- Information Services Section with Hyperlinks --> */}
        <section class="info-services-section">
            <div class="info-services-header">
                <h2 class="info-services-title">Information Services</h2>
                <p class="info-services-tagline">Access important electoral information and resources</p>
            </div>

            <div class="info-services-grid">
                {/* <!-- Know Your Polling Station Box --> */}
                <div class="info-service-box polling-station-box">
                    <div class="service-icon">📍</div>
                    <h3 class="service-title">Know Your Polling Station</h3>
                    <p class="service-description">Find your designated polling location and get directions</p>
                    <a href="./polling-station/index.html" class="info-service-btn">
                        Find Station
                    </a>
                </div>

                {/* <!-- Download Forms Box --> */}
                <div class="info-service-box download-forms-box">
                    <div class="service-icon">📄</div>
                    <h3 class="service-title">Download Forms for Registration</h3>
                    <p class="service-description">Access and download voter registration forms and documents</p>
                    <a href="./registration-forms/index.html" class="info-service-btn">
                        Get Forms
                    </a>
                </div>

                {/* <!-- Know Your Candidate Box --> */}
                <div class="info-service-box candidate-box">
                    <div class="service-icon">👥</div>
                    <h3 class="service-title">Know Your Candidate</h3>
                    <p class="service-description">Learn about candidates running in your constituency</p>
                    <a href="./candidate-info/index.html" class="info-service-btn">
                        View Candidates
                    </a>
                </div>
            </div>

            {/* <!-- Quick Links Section --> */}
            <div class="quick-links-section">
                <h3 class="quick-links-title">Quick Access</h3>
                <div class="quick-links-list">
                    <a href="./election-schedule/index.html" class="quick-link">Election Schedule</a>
                    <a href="./voter-guidelines/index.html" class="quick-link">Voter Guidelines</a>
                    <a href="./status-check/index.html" class="quick-link">Check Status</a>
                    <a href="./support/index.html" class="quick-link">Support</a>
                </div>
            </div>
        </section>
    </main>
{/* 
    <!-- Footer Section --> */}
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2025 Electors Portal. All rights reserved.</p>
            <p>Designed with commitment to democratic participation.</p>
        </div>
    </footer>
      </div>
    </>
  );
};

export default Electors_Home;