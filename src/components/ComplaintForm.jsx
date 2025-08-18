import React, { useState, useEffect } from "react";
import "../assets/css/PoliticalPartiesCandidates/ComplaintForm.css";

const ComplaintForm = () => {
  const [captcha, setCaptcha] = useState("");
  const [success, setSuccess] = useState(false);
  const [complaintId, setComplaintId] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(code);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = `CP-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.floor(
      Math.random() * 1000
    )
      .toString()
      .padStart(3, "0")}`;
    setComplaintId(id);
    setSuccess(true);
  };

  const resetForm = () => {
    setSuccess(false);
    generateCaptcha();
    document.getElementById("complaint-form").reset();
  };

  if (success) {
    return (
      <div className="main-container success-overlay">
        <h2>Complaint Submitted Successfully!</h2>
        <p>
          Your Complaint ID: <strong>{complaintId}</strong>
        </p>
        <button onClick={resetForm} className="submit-btn">
          Submit Another Complaint
        </button>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="form-header">
        <h1 className="page-title">Voter Portal Complaint Form</h1>
        <p className="page-subtitle">
          Submit your complaint regarding voter registration issues
        </p>
      </div>

      <form id="complaint-form" className="complaint-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="applicant-name" className="field-label">Applicant Name *</label>
          <input type="text" id="applicant-name" className="text-input" placeholder="Enter your full name" required />
        </div>

        <div className="input-group">
          <label htmlFor="mobile-number" className="field-label">Registered Mobile Number *</label>
          <input type="tel" id="mobile-number" className="text-input" placeholder="Enter 10-digit mobile number" pattern="[6-9][0-9]{9}" required />
        </div>

        <div className="input-group">
          <label htmlFor="email-address" className="field-label">Registered Email ID *</label>
          <input type="email" id="email-address" className="text-input" placeholder="Enter your email address" required />
        </div>

        <div className="input-group">
          <label htmlFor="application-number" className="field-label">Application Number *</label>
          <input type="text" id="application-number" className="text-input" placeholder="Enter your application number" required />
        </div>

        <div className="input-group">
          <label htmlFor="problem-description" className="field-label">Problem Description *</label>
          <textarea id="problem-description" className="text-area" placeholder="Describe your complaint in detail" required></textarea>
        </div>

        <div className="input-group">
          <label htmlFor="problem-file" className="field-label">Upload Screenshot/PDF</label>
          <div className="file-upload-area">
            <input type="file" id="problem-file" className="file-input" accept=".pdf,.jpg,.jpeg,.png" />
            <span>Click to upload file or drag and drop</span>
          </div>
        </div>

        <div className="input-group">
          <label className="field-label">Security Verification *</label>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span className="captcha-box">{captcha}</span>
            <button type="button" className="refresh-captcha-btn" onClick={generateCaptcha}>↻</button>
          </div>
          <input type="text" placeholder="Enter the captcha code" required className="text-input" />
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="declaration" className="checkbox-input" required />
          <label htmlFor="declaration">
            I hereby declare that all the information provided above is true and correct to the best of my knowledge *
          </label>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="confirmation" className="checkbox-input" required />
          <label htmlFor="confirmation">
            I confirm that all the information provided is correct and I understand that providing false information may lead to rejection of my complaint *
          </label>
        </div>

        <button type="submit" className="submit-btn">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;
