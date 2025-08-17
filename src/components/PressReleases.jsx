import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Media/PressReleases.css';
import { jsPDF } from 'jspdf';

const pressData = [
  {
    id: 1,
    title: 'BIHAR SIR 2025: DAILY BULLETIN',
    date: 'Sunday, 3rd August 2025, 4:33 PM',
    content: `ELECTION COMMISSION OF INDIA
Nirvachan Sadan, Ashoka Road, New Delhi-110001
No. ECI/B/4/2025
06.08.2025
BIHAR SIR 2025: DAILY BULLETIN
1st Aug (3 PM) till 6th Aug (9 AM)

A Claims & Objections received from Political Parties w.r.t. Draft Roll:
1. Aam Aadmi Party - 1 received, 0 disposed
2. Bahujan Samaj Party - 74 received, 0 disposed
3. Bharatiya Janata Party - 53338 received, 0 disposed
4. Communist Party of India (Marxist) - 899 received, 0 disposed
5. Indian National Congress - 17549 received, 0 disposed
6. National People’s Party - 7 received, 0 disposed

B Claims & Objections from Electors: 3659 received, 0 disposed

C Forms from New Electors: 19186 received, 0 disposed

As per rules, all claims & objections must be disposed by ERO/AERO after 7 days.
No name can be deleted without a speaking order by ERO/AERO.`,
  },
  {
    id: 2,
    title: 'Remuneration for BLOs & Supervisor - regarding',
    date: 'Saturday, 2nd August 2025, 5:31 PM',
    content: `The Election Commission has announced revised remuneration for Booth Level Officers (BLOs) and Supervisors.
The new rates will be effective immediately for all electoral processes in 2025.
BLOs will now receive additional allowances for duties on weekends.
Supervisors overseeing multiple polling stations will receive enhanced compensation.
The revision aims to motivate officers for efficient election management.
Detailed guidelines and payment schedules have been issued to all District Election Officers.
Training programs will include remuneration briefing for all officials.
The commission emphasizes compliance with the new remuneration structure.
All payments will be monitored and audited for transparency.
Any discrepancies must be reported to the concerned Electoral Officer within 7 days.
This measure ensures accountability and timely processing of election duties.`,
  },
  {
    id: 3,
    title: 'Bihar SIR 2025: Details from 1 August (3 PM) till 2 August (3 PM)',
    date: 'Saturday, 2nd August 2025, 3:28 PM',
    content: `During this period, the following electoral activities were conducted:
Voter registration verification across all districts.
Processing of claims and objections from political parties.
Updates to the draft electoral rolls based on received forms.
Verification of age eligibility and submission of Form 6 by new voters.
Coordination between BLOs and EROs for timely data collection.
Random audits to ensure data accuracy in Bihar SIR 2025.
Electors were informed via SMS and email notifications.
Training sessions for BLOs conducted in all blocks.
Deployment of additional staff for busy polling stations.
Technical support provided for online submission of claims.
Monitoring of compliance with electoral rules.
Reports submitted daily to the State Election Office.`,
  },
  {
    id: 4,
    title: 'Election Commission doubles the remuneration for Booth Level Officers; Enhances remuneration for BLO Supervisors',
    date: 'Saturday, 2nd August 2025, 11:11 AM',
    content: `The Election Commission of India has approved a significant increase in payments to election officials.
BLO remuneration has been doubled from the previous rates.
Supervisors overseeing multiple polling booths have enhanced compensation.
The move aims to ensure accountability and improve election efficiency.
Payments will be processed through official bank channels for transparency.
District Election Officers will monitor disbursement.
Training modules will be updated to reflect new payment structures.
All officers must acknowledge receipt of revised remuneration.
This decision is part of ongoing reforms to strengthen electoral processes.
Guidelines will be circulated to all concerned officials.
The enhancement is in effect for all upcoming elections in 2025.`,
  },
  {
    id: 5,
    title: 'DRAFT ELECTORAL ROLL ISSUED IN BIHAR TODAY',
    date: 'Friday, 1st August 2025, 7:40 PM',
    content: `The Election Commission has issued the draft electoral roll for Bihar.
All eligible citizens are requested to verify their entries.
Claims & objections can be submitted within 7 days of publication.
Instructions for submission of Form 6 and declarations are provided.
District officers are available to assist voters.
Random checks are being conducted to ensure accuracy.
Electoral rolls include updated details of new voters.
Special focus on inclusions and corrections to the list.
Mobile apps and online portals are also enabled for submissions.
Compliance with rules is mandatory for all submissions.
The draft will be finalized after the disposal of claims and objections.
Official notifications are available on the ECI website.`,
  },
  {
    id: 6,
    title: "Commission interacts with a delegation from the Indigenous People's Front of Tripura at Nirvachan Sadan",
    date: 'Friday, 1st August 2025, 2:13 PM',
    content: `The Election Commission held a meeting with the Indigenous People's Front of Tripura.
Discussion focused on electoral reforms and smooth election conduct.
Delegation raised concerns regarding voter registration in remote areas.
Commission assured necessary support for voter awareness programs.
Guidelines for polling and counting were shared with delegation members.
Commitments for timely grievance redressal were provided.
Officials highlighted the importance of transparency.
All measures aim to strengthen democratic participation.
Commission emphasized free and fair electoral practices.
Delegation members expressed appreciation for proactive engagement.
Follow-up sessions will be scheduled as necessary.
Documentation of proceedings was completed by the Secretariat.`,
  },
  {
    id: 7,
    title: 'Announcement of Schedule of Election to the Office of the Vice-President of India, 2025 (17th Vice-Presidential Election)',
    date: 'Friday, 1st August 2025, 12:53 PM',
    content: `The Election Commission of India has released the schedule for the 17th Vice-Presidential Election.
Key dates include nomination filing, scrutiny, and polling.
All candidates must comply with eligibility criteria.
Election notifications have been circulated to all states and UTs.
Procedures for electronic voting and ballot papers are clarified.
Returning officers have been appointed in each state.
Guidelines for campaign conduct and expenditure are provided.
Voter lists for the Electoral College are finalized.
Training of polling and counting staff will begin shortly.
Security arrangements are being coordinated with authorities.
The Commission emphasizes adherence to electoral code of conduct.
Official circulars are available for public reference.`,
  },
  {
    id: 8,
    title: 'Commission interacts with a delegation from the Janata Dal (United) at Nirvachan Sadan',
    date: 'Thursday, 31st July 2025, 7:00 PM',
    content: `The Election Commission conducted discussions with Janata Dal (United) representatives.
Topics included election preparedness and voter outreach programs.
Delegation raised questions on polling station arrangements.
Commission provided guidance on compliance with election laws.
Officials ensured proper training of election staff.
Focus on maintaining free and fair elections across all districts.
Delegation appreciated timely communication and transparency.
Grievance redressal mechanisms were explained.
Follow-up meetings are scheduled as needed.
All interactions were documented for official records.
Emphasis on inclusivity and voter education initiatives.
Commission reaffirmed commitment to democratic processes.`,
  },
];

const PressReleases = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = pressData.filter(({ title }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const downloadPDF = (title, date, content) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    const maxLineWidth = pageWidth - margin * 2;

    doc.setFontSize(16);
    doc.text(title, margin, 20);

    doc.setFontSize(12);
    doc.text(date, margin, 30);

    const lines = doc.splitTextToSize(content, maxLineWidth);
    doc.text(lines, margin, 40);

    doc.save(`${title}.pdf`);
  };

  return (
    <div className="press-releases-page" style={{ padding: '1.5rem', maxWidth: 900, margin: 'auto' }}>
      <h1 style={{ marginBottom: '1rem' }}>Press Releases</h1>

      <input
        type="text"
        placeholder="Search press releases..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '0.5rem',
          width: '100%',
          marginBottom: '1.5rem',
          fontSize: '1rem',
          borderRadius: 4,
          border: '1px solid #ccc',
        }}
      />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.length === 0 && <li>No press releases found.</li>}

        {filtered.map(({ id, title, date, content }) => (
          <li
            key={id}
            style={{
              borderBottom: '1px solid #ddd',
              padding: '1rem 0',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Link
              to={`/media/press-releases/${id}`}
              style={{ fontWeight: '600', fontSize: '1.1rem', color: '#1a0dab', textDecoration: 'underline', marginBottom: 6 }}
            >
              {title}
            </Link>
            <div style={{ color: '#555', fontSize: '0.9rem', marginBottom: 6 }}>
              {date}
            </div>

            <button
              onClick={() => downloadPDF(title, date, content)}
              style={{
                marginTop: '0.5rem',
                padding: '0.4rem 0.8rem',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              Download PDF
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PressReleases;
