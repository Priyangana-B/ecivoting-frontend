import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../assets/css/PoliticalPartiesCandidates/Political_Parties_Candidates_Home.css"; // Updated path
import Candidates from "./Candidates";

const Political_Parties_Candidates_Home = () => {
  const [activeTab, setActiveTab] = useState("parties");

  const services = [
    {
      title: "POLITICAL PARTY REGISTRATION",
      description:
        "Registration of new political parties under section 29 A of the Representation of the People Act, 1951.",
      link: "/political-party-registration",
      color: "blue",
    },
    {
      title: "PPRTMS",
      description: "Online Political Parties Registration Tracking Management System",
      link: "/pprtms",
      color: "pink",
    },
    {
      title: "POLITICAL PARTIES & ELECTION SYMBOL",
      description:
        "Allotment of reserved symbol under para no.10A, para 10B and Misc. Orders reg. Election symbols and Symbol orders",
      link: "/political-parties-symbol",
      color: "blue",
    },
    {
      title: "CONSTITUTIONS OF POLITICAL PARTIES",
      description: "See the Constitutional of Recognized National and State Political Parties",
      link: "/constitutions",
      color: "pink",
    },
    {
      title: "ORGANIZATIONAL ELECTION",
      description: "Organizational Election of Recognized National and State Political Parties",
      link: "/organizational-election",
      color: "blue",
    },
    {
      title: "GUIDELINES FOR POLITICAL PARTIES",
      description:
        "Guidelines on transparency and accountability in party fund and election expenditure matter",
      link: "/guidelines",
      color: "pink",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container" >
          <div className="hero-content">
            <h1>POLITICAL PARTIES/CANDIDATES</h1>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs-section">
        <div className="container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "parties" ? "active" : ""}`}
              onClick={() => setActiveTab("parties")}
            >
              Political Parties
            </button>
            <button
              className={`tab ${activeTab === "candidates" ? "active" : ""}`}
              onClick={() => setActiveTab("candidates")}
            >
              Candidates
            </button>
          </div>
        </div>
      </div>

      {/* Conditional Content */}
      <div className="services-section">
        <div className="container">
          {activeTab === "parties" ? (
            <div className="services-grid">
              {services.map((service, index) => (
                <Link to={service.link} key={index} className={`service-card ${service.color}`}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="candidates-content">
              <Candidates />
            </div>
          )}
        </div>
      </div>

      {/* Additional Sections */}
      <div className="additional-sections">
        <div className="container">
          <div className="additional-grid">
            <a
              href="https://eci.gov.in/eci-backend/public/api/download?url=LMAhAK6sOPBp%2FNFF0iRfXbEB1EVSLT41NNLRjYNJJP1KivrUxbfqkDatmHy12e%2FzBiU51zPFZI5qMtjV1qgjFsK5bO1Fe8raUy8r%2B3VvV91%2BNS6YJQ6ueAyXTCx3xFZcCSv%2B1yJkuMeCkTzY9fhBvw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="additional-card blue"
            >
              <h3>ELECTORAL BONDS</h3>
              <p>Disclosure of Electoral Bonds 2024</p>
            </a>

            <a
              href="https://eci.gov.in/eci-backend/public/pdf/report/January/1737011901.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="additional-card pink"
            >
              <h3>EXPENDITURE REPORTS</h3>
              <p>Election expenditure statements for General and Assembly elections</p>
            </a>

            <a
              href="https://eci.gov.in/eci-backend/public/pdf/report/2023/January/contribution/CR%20of%20BRS%20for%20FY%202022-23.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="additional-card blue"
            >
              <h3>CONTRIBUTION REPORTS</h3>
              <p>Annual contribution reports of recognized political parties</p>
            </a>

            <a
              href="https://eci.gov.in/eci-backend/public/pdf/report/December/1735634859.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="additional-card pink"
            >
              <h3>ANNUAL AUDIT REPORTS</h3>
              <p>Audit & financial statements of political parties</p>
            </a>

            <div className="additional-card center">
            <Link to="/complaint-form" style={{ textDecoration: "none", color: "inherit" }}>
              <h3>DISPUTES & MERGER FILINGS</h3>
              <p>Fill out the form to submit and review party disputes, mergers, and related matters.</p>
            </Link>
          </div>

          </div>
        </div>
      </div>

      {/* Bottom Section (Removed as per requirement) */}
      {/* 
      <div className="bottom-services">
        <div className="container">
          <div className="bottom-grid">
            <div className="bottom-card">
              <h4>List of Political Parties</h4>
              <p>Find all political parties registered with ECI</p>
            </div>
            <div className="bottom-card">
              <h4>Recognition & De-recognition of parties</h4>
              <p>Find list of all recognition and de-recognition parties</p>
            </div>
            <div className="bottom-card">
              <h4>Dispute, Merger etc.</h4>
              <p>View matters about disputes and merger</p>
            </div>
            <div className="bottom-card">
              <h4>Miscellaneous, Orders, Notices etc.</h4>
              <p>All orders, notifications and Notices</p>
            </div>
          </div>
        </div>
      </div> 
      */}
    </div>
  );
};

export default Political_Parties_Candidates_Home;
