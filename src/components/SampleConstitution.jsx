import React from "react";
import { FaFilePdf } from "react-icons/fa";
import "../assets/css/PoliticalPartiesCandidates/SampleConstitution.css";

export default function SampleConstitution() {
  return (
    <div className="constitution-container">
    

      {/* Page Title */}
      <h1 className="page-title">Sample Constitution</h1>

      {/* Intro Section */}
      <div className="intro-box">
        <p>
          This <strong>sample constitution template</strong> is provided to assist
          political parties in preparing their own constitution in line with the{" "}
          <strong>Election Commission of India</strong> guidelines. It outlines
          the recommended structure, roles, and responsibilities for a compliant
          organizational framework.
        </p>
        <p>
          The document covers key sections such as:
        </p>
        <ul>
          <li>Party objectives and guiding principles</li>
          <li>Membership rules and eligibility</li>
          <li>Executive committee structure</li>
          <li>Meeting schedules and decision-making processes</li>
          <li>Financial transparency guidelines</li>
        </ul>
      </div>

      {/* Document Card */}
      <div className="document-card">
        <FaFilePdf className="doc-icon" />
        <div className="doc-info">
          <h3>Sample Constitution Template</h3>
          <p>PDF format • Last Updated: July 2025</p>
          <a
            href="/downloads/sample-constitution.pdf"
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            📥 Download PDF
          </a>
        </div>
      </div>

      {/* Note */}
      <div className="note-box">
        <strong>Note:</strong> Ensure you adapt the template to match your
        organization’s specific goals and comply with all legal requirements
        before submission.
      </div>
    </div>
  );
}
