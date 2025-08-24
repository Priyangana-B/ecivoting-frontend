import { useState } from "react";
import { Link } from "react-router-dom";
import img3 from "../assets/Images/image3.jpg";
import "../assets/css/PoliticalPartiesCandidates/PoliticalPartyRegistration.css"; // Updated path

const PoliticalPartyRegistration = () => {
  const [expandedGuidelines, setExpandedGuidelines] = useState(null);

  const guidelines = [
    {
      id: 1,
      title: "Amended Guidelines for Party registration",
      date: "Date: Monday, 02 Jan 2024, 2:30 AM",
      info: [
        "Online application facility introduced via ECI portal.",
        "Reduction in processing time from 90 days to 60 days.",
        "Mandatory submission of party constitution in prescribed format.",
        "Provision for electronic tracking of application status.",
        "Inclusion of self-declaration for adherence to Model Code of Conduct."
      ]
    },
    {
      id: 2,
      title:
        "Registration of political parties under section 29 A of the Representation of the People Act, 1951 - Issue of additional guidelines",
      date: "Date: Friday, 25 Jan 2024, 5:00 AM",
      info: [
        "Clarification on eligibility for party registration.",
        "Requirements of minimum 100 members as founding members.",
        "Mandatory PAN and Aadhaar details for office bearers.",
        "Public notice period increased to 30 days for objections.",
        "Introduction of verification of funding sources before approval."
      ]
    },
    {
      id: 3,
      title: "Registration of Political Parties - Choice of Name for Political Party",
      date: "Date: Sunday, 15 May 2024, 4:00 AM",
      info: [
        "Names identical or similar to existing registered parties are prohibited.",
        "Party names must not promote religion, caste, or linguistic divisions.",
        "Prohibition on use of terms that suggest association with Government bodies.",
        "Names should not include symbols or emblems used by existing parties.",
        "Approval is subject to ECI scrutiny and public objection process."
      ]
    },
    {
      id: 4,
      title: "Political Parties Registration Guidelines",
      date: "Date: Sunday, 28 May 2024, 5:00 AM",
      info: [
        "Step-by-step procedure for party registration under Section 29A.",
        "List of required documents including affidavits and constitutions.",
        "Verification process and issuance of public notices.",
        "Handling of objections received during notice period.",
        "Issuance of final registration certificate upon approval."
      ]
    },
    {
      id: 5,
      title: "Political Parties Registration - New parties seeking registration (Dated 18/07/2025)",
      date: "Date: Friday, 18 Jul 2025, 6:00 PM",
      info: [
        "Applications currently under scrutiny for 25 new parties.",
        "Verification of documents and eligibility of party office bearers.",
        "Public notice issued inviting objections for 30 days.",
        "Final decision pending for approval or rejection.",
        "Details of each party available in public domain on ECI portal."
      ]
    }
  ];

  const toggleGuideline = (id) => {
    setExpandedGuidelines(expandedGuidelines === id ? null : id);
  };

  return (
    <div className="political-party-registration">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <img src={img3} alt="Political Party Registration" />
          <h1>Political Parties Registration</h1>
          <p>Registration and management of political parties under electoral laws</p>
        </div>
      </div>

      <div className="container">
        <div className="main-content">
          {/* Guidelines Section */}
          <section className="guidelines-section">
            <h2 className="section-title">Guidelines/Instructions</h2>
            <div className="guidelines-list">
              {guidelines.map((guideline) => (
                <div key={guideline.id} className="guideline-item">
                  <div className="guideline-content">
                    <h3>{guideline.title}</h3>
                    <p className="guideline-date">{guideline.date}</p>
                    {expandedGuidelines === guideline.id && (
                      <ul className="guideline-info">
                        {guideline.info.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <button
                    className="expand-btn"
                    onClick={() => toggleGuideline(guideline.id)}
                  >
                    {expandedGuidelines === guideline.id ? "−" : "+"}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Registration Info Section */}
          <section className="registration-info">
            <h2 className="section-title">Political Parties Registration</h2>
            <div className="info-grid">
              <div className="info-card">
                <h3>Registration Requirements</h3>
                <ul>
                  <li>Application under Section 29A of the Representation of the People Act, 1951</li>
                  <li>Constitution of the political party</li>
                  <li>List of office bearers</li>
                  <li>Address of headquarters</li>
                  <li>Proposed name and symbol</li>
                  <li>Affidavit regarding compliance with electoral laws</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>Registration Process</h3>
                <ol>
                  <li>Submit application with required documents</li>
                  <li>Verification by Election Commission</li>
                  <li>Public notice for objections (30 days)</li>
                  <li>Consideration of objections</li>
                  <li>Final decision by Commission</li>
                  <li>Certificate of registration issued</li>
                </ol>
              </div>

              <div className="info-card">
                <h3>Post Registration Obligations</h3>
                <ul>
                  <li>Annual audit of accounts</li>
                  <li>Submission of contribution reports</li>
                  <li>Compliance with election expenditure limits</li>
                  <li>Regular organizational elections</li>
                  <li>Maintenance of updated records</li>
                  <li>Adherence to model code of conduct</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section className="download-section">
            <h2 className="section-title">Download Forms and Documents</h2>
            <div className="download-grid">
              <Link to="/application-form" className="download-item">
                <div className="download-icon">📄</div>
                <div className="download-content">
                  <h4>Application Form</h4>
                  <p>Form for political party registration</p>
                </div>
              </Link>

              <Link to="/sample-constitution" className="download-item">
                <div className="download-icon">📊</div>
                <div className="download-content">
                  <h4>Sample Constitution</h4>
                  <p>Template for party constitution</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PoliticalPartyRegistration;
