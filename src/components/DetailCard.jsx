import React from "react";
import "../assets/css/VoterEducation/detail-card.css";

export default function DetailCard({ title, subtitle, sections = [] }) {
  return (
    <div className="detail-wrapper">
      <div className="status-card">
        <div className="card-header">
          <span className="header-badge">✓</span>
          <div className="header-texts">
            <h2>{title}</h2>
            {subtitle && <p className="header-subtitle">{subtitle}</p>}
          </div>
        </div>

        <div className="card-content">
          {sections.map((sec, idx) => (
            <section key={idx} className="content-section">
              <h3>{sec.heading}</h3>
              {Array.isArray(sec.points) ? (
                <ul className="bullet-list">
                  {sec.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              ) : (
                <p>{sec.text}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
