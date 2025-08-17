import React from 'react';
import "../assets/css/Media/PressReleaseDetail.css"// correct if index.css is in src


export default function App() {
  return (
    <div>
      <h1>Media and Publications - ECI</h1>

      {/* Press Releases */}
      <section>
        <h2>Press Releases</h2>
        <div className="grid grid-2">
          <div className="card">
            <img src="/assets/press-vtr.jpg" alt="VTR Launch" />
            <h3>ECI Launches Real-Time Voter Tracking</h3>
            <p>June 3, 2025</p>
            <p>The Election Commission introduced the VTR system to monitor real-time voter turnout across constituencies.</p>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section>
        <h2>Publications</h2>
        <div className="grid grid-2">
          <div className="card">
            <img src="/assets/report-2019.jpg" alt="2019 Report" />
            <h3>Narrative Report - 2019 Lok Sabha Elections</h3>
            <a href="#">View Report</a>
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section>
        <h2>Media Gallery</h2>
        <div className="grid grid-3 gallery">
          <div className="card">
            <img src="/assets/cec-media.jpg" alt="CEC Briefing" />
            <div className="gallery-caption">Chief Election Commissioner briefing media</div>
          </div>
          <div className="card">
            <img src="/assets/voter-helpline.jpg" alt="Helpline Launch" />
            <div className="gallery-caption">Launch of Voter Helpline App</div>
          </div>
        </div>
      </section>
    </div>
  );
}
