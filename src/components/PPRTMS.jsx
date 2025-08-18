import { useState } from "react";
import "../assets/css/PoliticalPartiesCandidates/PPRTMS.css";

const mockDatabase = {
  "678961": {
    applicationNumber: "ECI/PPR/2024/XY789012",
    partyName: "National Unity Front",
    applicantName: "Priya Sharma",
    submissionDate: "2024-01-10",
    status: "Approved",
    currentStage: "Registration Complete",
    lastUpdated: "2024-01-25"
  },
  "123456": {
    applicationNumber: "ECI/PPR/2024/AB123456",
    partyName: "People First Party",
    applicantName: "Rajesh Kumar",
    submissionDate: "2024-02-01",
    status: "Under Review",
    currentStage: "Document Verification",
    lastUpdated: "2024-02-05"
  }
};

const PPRTMS = () => {
  const [trackingId, setTrackingId] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState("");

  const handleTrackApplication = (e) => {
    e.preventDefault();
    const data = mockDatabase[trackingId];
    if (data) {
      setSearchResults(data);
      setError("");
    } else {
      setSearchResults(null);
      setError("No application found for this Tracking ID");
    }
  };

  return (
    <div className="pprtms">
      <div className="page-header">
        <div className="container">
          <h1>PPRTMS</h1>
          <p>Online Political Parties Registration Tracking Management System</p>
        </div>
      </div>

  

      <div className="container">
        <div className="main-content">
          <section className="tracking-section">
            <div className="tracking-card">
              <h2>Track Your Application</h2>
              <form onSubmit={handleTrackApplication} className="tracking-form">
                <div className="form-group">
                  <label htmlFor="trackingId">Application Tracking ID</label>
                  <input
                    type="text"
                    id="trackingId"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="Enter your tracking ID"
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Track Application
                </button>
              </form>

              {error && <div className="error-box">{error}</div>}

              {searchResults && (
                <div className="application-details-card">
                  <div className="application-header">
                    <span className="status-icon">✔</span>
                    <h3>Application Found</h3>
                  </div>

                  <div className="details-grid">
                    <div>
                      <label>Application Number:</label>
                      <span>{searchResults.applicationNumber}</span>
                    </div>
                    <div>
                      <label>Party Name:</label>
                      <span className="highlight">{searchResults.partyName}</span>
                    </div>
                    <div>
                      <label>Applicant Name:</label>
                      <span>{searchResults.applicantName}</span>
                    </div>
                    <div>
                      <label>Submission Date:</label>
                      <span>{searchResults.submissionDate}</span>
                    </div>
                    <div>
                      <label>Status:</label>
                      <span className={`status-badge ${searchResults.status === "Approved" ? "green" : "yellow"}`}>
                        {searchResults.status}
                      </span>
                    </div>
                    <div>
                      <label>Current Stage:</label>
                      <span className="link">{searchResults.currentStage}</span>
                    </div>
                    <div>
                      <label>Last Updated:</label>
                      <span>{searchResults.lastUpdated}</span>
                    </div>
                  </div>

                  <div className="button-row">
                    <button className="btn download">Download Status Report</button>
                    <button className="btn refresh">Refresh Status</button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PPRTMS;
