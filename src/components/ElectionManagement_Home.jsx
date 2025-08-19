import React, { useEffect } from 'react';
import '../assets/css/Election_Management/ElectionManagement_Home.css';
import { Link } from "react-router-dom";

const ElectionManagement_Home = () => {
    // Add the smooth scrolling JavaScript code here
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#login-modal') {
                    document.getElementById('login-modal').style.display = 'flex';
                } else if (document.querySelector(targetId)) {
                    document.querySelector(targetId).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, []);

    return (
        
            

            <main className="container">
                {/* Importance of Voting Section */}
                <section id="importance-of-voting">
                    <h2>Election Management - The Power of Your Vote</h2>
                    <p>
                        Voting is a fundamental right and a cornerstone of democracy. It's your opportunity to choose leaders who represent
                        your interests and values, and to influence decisions that shape your community and country. Every vote counts,
                        contributing to the collective voice that steers the nation's future. By participating, you ensure your voice is heard
                        and help build a government that truly serves the people. Don't miss your chance to make a difference!
                    </p>
                </section>

                {/* Election Types Section */}
                <section id="election-types">
                    <h2>Election Categories</h2>
                    <div className="election-cards-grid">
                        {/* Lok Sabha Election Card */}
                        <div className="election-card">
                            <img src="https://placehold.co/400x250/dbeafe/1e40af.png?text=Lok+Sabha" alt="Lok Sabha Election"/>
                            <h3>Lok Sabha Elections</h3>
                            <p>
                                These elections determine the members of the Lok Sabha, the lower house of India's Parliament.
                                Voters directly elect representatives from constituencies across the country.
                            </p>
                            <Link to="/LokSabhaPortal" className="arrow-link">
                                Visit Lok Sabha Portal
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>

                        {/* Rajya Sabha Election Card */}
                        <div className="election-card">
                            <img src="https://placehold.co/400x250/bfdbfe/1c30a5.png?text=Rajya+Sabha" alt="Rajya Sabha Election"/>
                            <h3>Rajya Sabha Elections</h3>
                            <p>
                                Members of the Rajya Sabha, the upper house of Parliament, are elected by the elected members of
                                State Legislative Assemblies using a system of proportional representation.
                            </p>
                            <Link to="/RajyaSabhaPortal" className="arrow-link">
                                Visit Rajya Sabha Portal
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>

                        {/* Bidhan Sabha Election Card */}
                        <div className="election-card">
                            <img src="https://placehold.co/400x250/c0ebf5/007bff.png?text=Bidhan+Sabha" alt="Bidhan Sabha Election"/>
                            <h3>Bidhan Sabha Elections</h3>
                            <p>
                                These are State Assembly Elections, where voters choose representatives for their respective
                                State Legislative Assemblies (Vidhan Sabha).
                            </p>
                            <Link to="/BidhanSabhaPortal" className="arrow-link">
                                Visit Bidhan Sabha Portal
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section id="results">
                    <h2>Latest Election Results</h2>
                    <div className="results-flex-container">
                        <div className="result-item">
                            <h3>Lok Sabha General Election 2024</h3>
                            <p><strong>Overall Result:</strong> NDA secured 293 seats (BJP 240).</p>
                            <p><strong>Opposition:</strong> INDIA alliance secured 234 seats (INC 99).</p>
                            <p><strong>Key Outcome:</strong> Formation of the 18th Lok Sabha.</p>
                        </div>
                        <div className="result-item">
                            <h3>Andhra Pradesh Assembly Election 2024</h3>
                            <p><strong>Winning Alliance:</strong> NDA (TDP as largest party).</p>
                            <p><strong>Total Seats:</strong> 175.</p>
                            <p><strong>Chief Minister:</strong> N. Chandrababu Naidu.</p>
                        </div>
                        <div className="result-item">
                            <h3>Odisha Assembly Election 2024</h3>
                            <p><strong>Winning Party:</strong> Bharatiya Janata Party (BJP).</p>
                            <p><strong>Total Seats:</strong> 147.</p>
                            <p><strong>Chief Minister:</strong> Mohan Charan Majhi.</p>
                        </div>
                    </div>
                    <div className="results-footer">
                        <p>
                            For more detailed and real-time results, please visit the official Election Commission of India website.
                        </p>
                        <a href="https://eci.gov.in/elections/currentelections/" target="_blank" rel="noopener noreferrer" className="official-results-button">
                            View All Official Results
                        </a>
                    </div>
                </section>

                {/* Image Gallery Section */}
                <section id="image-gallery">
                    <h2>Election Photo Gallery</h2>
                    <div className="image-gallery-grid">
                        <div className="image-item">
                            <img src="https://placehold.co/600x400/a7f3d0/065f46.png?text=Voting+Booth" alt="Voting Booth"/>
                            <div className="caption">A bustling voting booth on election day.</div>
                        </div>
                        <div className="image-item">
                            <img src="https://placehold.co/600x400/d1fae5/064e3b.png?text=Political+Rally" alt="Political Rally"/>
                            <div className="caption">A large crowd gathered for a political rally.</div>
                        </div>
                        <div className="image-item">
                            <img src="https://placehold.co/600x400/ace0c3/004c2a.png?text=Ballot+Box" alt="Ballot Box"/>
                            <div className="caption">Close-up of a secure ballot box.</div>
                        </div>
                        <div className="image-item">
                            <img src="https://placehold.co/600x400/81c784/1b5e20.png?text=Counting+Center" alt="Counting Center"/>
                            <div className="caption">Election officials at a vote counting center.</div>
                        </div>
                        <div className="image-item">
                            <img src="https://placehold.co/600x400/dcedc8/33691e.png?text=Voter+ID" alt="Voter ID"/>
                            <div className="caption">A voter presenting their identification.</div>
                        </div>
                        <div className="image-item">
                            <img src="https://placehold.co/600x400/c5e1a5/558b2f.png?text=Campaign+Poster" alt="Campaign Poster"/>
                            <div className="caption">Vibrant campaign posters displayed in public.</div>
                        </div>
                    </div>
                </section>
            </main>

           
        
    );
};

export default ElectionManagement_Home;
