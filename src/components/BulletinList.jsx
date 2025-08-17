// src/components/BulletinList.jsx
import React from 'react';

const bulletins = [
  {
    title: 'Remuneration for BLOs & Supervisor - regarding',
    date: 'Sunday, 3rd August 2025, 4:33 PM',
    pdfLink: '/pdfs/blo_remuneration.pdf',
  },
  {
    title: 'Bihar SIR 2025: Details from 1 August (3 PM) till 2 August (3 PM)',
    date: 'Saturday, 2nd August 2025, 5:31 PM',
    pdfLink: '/pdfs/sir_2025_details.pdf',
  },
  {
    title: 'Election Commission doubles the remuneration for Booth Level Officers; Enhances remuneration for BLO Supervisors',
    date: 'Saturday, 2nd August 2025, 3:28 PM',
    pdfLink: '/pdfs/blo_doubled.pdf',
  },
  {
    title: 'DRAFT ELECTORAL ROLL ISSUED IN BIHAR TODAY',
    date: 'Saturday, 2nd August 2025, 11:11 AM',
    pdfLink: '/pdfs/draft_roll_bihar.pdf',
  },
  {
    title: 'Commission interacts with a delegation from the Indigenous People\'s Front of Tripura at Nirvachan Sadan',
    date: 'Friday, 1st August 2025, 7:40 PM',
    pdfLink: '/pdfs/ipft_meeting.pdf',
  },
  {
    title: 'Announcement of Schedule of Election to the Office of the Vice-President of India, 2025 (17th Vice-Presidential Election)',
    date: 'Friday, 1st August 2025, 2:13 PM',
    pdfLink: '/pdfs/vp_schedule_2025.pdf',
  },
  {
    title: 'Commission interacts with a delegation from the Janata Dal (United) at Nirvachan Sadan',
    date: 'Friday, 1st August 2025, 12:53 PM',
    pdfLink: '/pdfs/jdu_meeting.pdf',
  },
];

const BulletinList = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>BIHAR SIR 2025: DAILY BULLETIN</h2>
      <ul>
        {bulletins.map((item, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <strong>{item.date}</strong><br />
            <a href={item.pdfLink} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletinList;
