import React from "react";
import '../assets/css/VoterEducation/VoterEducation_Home.css';
import { Link } from "react-router-dom";


export default function VoterEducation_Home(){
    return(
        <main className="topbar">
            <div className="heading">
                <h1>Voter Education Portal</h1>
                <h6>Empowering Every Vote, Enriching Every Voice</h6>
            </div>

            {/* Quick Links Section */}
      <section className="quick-links">
        <h2>Quick Links</h2>
        <div className="links-container">
          
          {/* Register to Vote */}
          <Link 
            to="/RegisterToVote" 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="link-card">
              <span className="icon">📝</span>
              <h3>Register to Vote</h3>
              <p>Start your voter registration process easily online.</p>
            </div>
          </Link>

          {/* How to Vote */}
          <Link 
            to="/HowToVote" 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="link-card">
              <span className="icon">🗳️</span>
              <h3>How to Vote</h3>
              <p>Learn step-by-step how to cast your vote properly.</p>
            </div>
          </Link>

          {/* Find Polling Booth */}
          <Link 
            to="/FindPollingBooth" 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="link-card">
              <span className="icon">📍</span>
              <h3>Find Your Polling Booth</h3>
              <p>Locate your nearest polling booth with our guide.</p>
            </div>
          </Link>
        </div>
      </section>
      {/* Info Section */}
      <section className="info-section">
      <h2>Voter Education Resources</h2>

      <div className="info-grid">
        {/* Card 1 */}
        <Link
          to="/WhyVotingMatters"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="info-card">
            <h3>Why Voting Matters</h3>
            <p>Understand the power of your vote and its role in shaping democracy.</p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link
          to="/HowToRegister"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="info-card">
            <h3>How to Register to Vote</h3>
            <p>Step-by-step guide to complete your voter registration smoothly.</p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link
          to="/KnowYourCandidate"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="info-card">
            <h3>Know Your Candidate & Party</h3>
            <p>Get informed about candidates, parties, and their manifestos.</p>
          </div>
        </Link>

        {/* Card 4 */}
        <Link
          to="/VotingProcess"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="info-card">
            <h3>Voting Process Explained</h3>
            <p>Learn the entire process of voting, from polling to counting.</p>
          </div>
        </Link>

        {/* Card 5 */}
        <Link
          to="/ElectionDates"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="info-card">
            <h3>Election Dates & Reminders</h3>
            <p>Stay updated with upcoming elections and key deadlines.</p>
          </div>
        </Link>

        {/* Card 6 */}
        <Link
          to="/YouthCorner"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="info-card">
            <h3>Youth & First-time Voters Corner</h3>
            <p>Special guidance and motivation for young and first-time voters.</p>
          </div>
        </Link>
      </div>
    </section>
    
    </main>
  );
}