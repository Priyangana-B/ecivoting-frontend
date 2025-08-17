import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { jsPDF } from "jspdf";
import "../assets/css/Media/CurrentIssues.css"; // Ensure the correct path to your CSS file

const issues = [
  {
    id: 1,
    title: "EVMS ARE TAMPER PROOF",
    date: "Thursday, 31st July 2025, 5:58 PM",
    content: `The Election Commission reiterates that EVMs are tamper-proof and secure:
- Each EVM is standalone, not connected to any network.
- Units are manufactured under stringent security protocols.
- Technical features prevent external programming.
- Mock polls are conducted before actual voting begins.
- Strong physical safeguards are in place.
- Storage and transportation follow secure SOPs.
- Representatives of political parties can inspect units.
- Tampering claims have never been substantiated.
- EVMs carry unique identification numbers.
- Strict custody and sealing procedures applied.
- Periodic audits ensure equipment integrity.
- Any suspicion is addressed transparently.
- Voter confidence is paramount.
- The Commission ensures full transparency and accountability.`,
  },
  {
    id: 2,
    title: "Vice-Presidential Election 2025 Preparation of Electoral College Completed",
    date: "Thursday, 31st July 2025, 4:42 PM",
    content: `The Election Commission has completed preparations for the Electoral College:
- Verified list of Members of Parliament prepared.
- Electoral rolls printed and sealed.
- Ballot papers readied per statutory guidelines.
- Security protocols established for polling venues.
- Polling officers trained and deployed.
- Nomination scrutiny completed without objections.
- Notification of polling date published.
- Voting booths inspected for compliance.
- Coordination with Parliament Secretariat done.
- Electoral rolls distributed to Returning Officer.
- Media briefing conducted on election procedure.
- Security and transportation rehearsals completed.
- COVID protocols included in planning.
- System checks finalized for seamless voting process.`,
  },
  {
    id: 3,
    title: "BACKGROUND MATERIAL REGARDING ELECTION TO THE OFFICE OF THE VICE- PRESIDENT OF INDIA, 2025",
    date: "Tuesday, 29th July 2025, 7:57 PM",
    content: `The Commission has issued background material for the 2025 VP election:
- Office of the Vice-President established under Article 63.
- Elected by members of both Houses of Parliament.
- System of proportional representation by single transferable vote.
- VP acts as ex-officio Chairperson of Rajya Sabha.
- Legal framework: Constitution & Presidential/Vice-Presidential Election Act.
- Returning Officer designated from Rajya Sabha Secretariat.
- Electoral College comprises 788 MPs.
- No state legislators participate in this election.
- Ballot boxes prepared with double-lock safety.
- ECI issues ‘Do’s and Don’ts’ for candidates.
- Vote counting under tight supervision.
- Ongoing updates shared via press briefings.
- Result expected same day of counting.
- Model Code of Conduct enforced.`,
  },
  {
    id: 4,
    title: "Vice-Presidential Election 2025",
    date: "Tuesday, 29th July 2025, 3:43 PM",
    content: `Updates regarding the Vice-Presidential Election 2025 include:
- Polling scheduled for August 6th, 2025.
- Nomination process concluded on July 29th.
- Scrutiny found all nominations valid.
- Each MP casts a single preferential vote.
- Use of special pen issued by ECI mandatory.
- Counting process scheduled to start by 6 PM.
- Observer appointed for each stage.
- Result declaration by evening of polling day.
- Strict enforcement of secrecy during voting.
- Covid-19 guidelines followed for safety.
- Media briefing rooms arranged at ECI HQ.
- All ballot boxes secured with tags and seals.
- Security forces deployed at all voting sites.
- Candidates briefed on code of conduct.`,
  },
  {
    id: 5,
    title: "Commission interacts with a delegation from the Shiv Sena at Nirvachan Sadan",
    date: "Tuesday, 29th July 2025, 3:06 PM",
    content: `A delegation from Shiv Sena met with the Commission today:
- Submitted a memorandum on polling arrangements.
- Raised concerns on campaign restrictions.
- Discussed security deployment in sensitive areas.
- Urged transparency in electoral roll revisions.
- ECI assured strict enforcement of MCC.
- Party asked for timely release of voter slips.
- Issues of accessibility for elderly discussed.
- Commission to issue instructions to State CEO.
- Suggestions to improve polling station signage welcomed.
- VVPAT functioning demonstration held.
- Commission reiterated neutrality and fairness.
- Meeting conducted in presence of full Commission.
- Delegation thanked for constructive inputs.
- Record of discussion documented officially.`,
  },
  {
    id: 6,
    title: "Bihar SIR: Key Findings of Enumeration Phase (24 June–25 July 2025)",
    date: "Sunday, 27th July 2025, 4:49 PM",
    content: `Enumeration under the Special Summary Revision yielded significant insights:
- Over 1.2 crore household visits conducted.
- 98% coverage of eligible voter households achieved.
- Youth enrollment (18–21) saw a 12% rise.
- BLOs facilitated inclusion of women and transgenders.
- 85% of dropped voters removed with valid proof.
- Door-to-door Form 6 distribution ensured.
- Data digitization completed for all districts.
- Use of mobile apps increased data accuracy.
- Electoral Literacy Clubs aided awareness drives.
- Participation from civil society appreciated.
- Feedback mechanisms set up in all blocks.
- Monitoring by DEOs and observers ensured accuracy.
- All forms submitted now under final scrutiny.
- Clean and inclusive rolls expected by September.`,
  },
  {
    id: 7,
    title: "7.23 crore Bihar electors express full faith in SIR process with active participation",
    date: "Friday, 25th July 2025, 4:50 PM",
    content: `Massive participation recorded in the SIR process:
- 7.23 crore electors engaged across Bihar.
- Over 15 lakh new registrations received.
- 12 lakh electors corrected personal details.
- Awareness through ‘Matdata Mitra’ campaigns effective.
- Helpline centers witnessed 25% spike in queries.
- BLOs reported increased cooperation from public.
- Over 4000 training sessions conducted for officers.
- Remote regions covered via mobile vans.
- Voter Helpline App downloads increased tenfold.
- District-level grievance cells resolved 92% issues.
- Youth enrollment highest in Patna, Gaya & Darbhanga.
- Voter education materials in Maithili & Bhojpuri circulated.
- Voter verification linked with Aadhaar in pilot zones.
- State CEO commended for excellent coordination.`,
  },
  {
    id: 8,
    title: "Vice-Presidential Election, 2025: ECI appoints Returning Officer and Assistant ROs",
    date: "Friday, 25th July 2025, 10:58 AM",
    content: `The Election Commission has appointed key officials:
- Sh. P.C. Mody, Secretary General, RS as Returning Officer.
- 4 Assistant ROs designated to support process.
- Responsibilities include nominations, polling & counting.
- Coordination with Parliament Secretariat ensured.
- Returning Officer trained in latest ECI protocols.
- All ballot boxes handed over under camera recording.
- Officials briefed on legal framework & logistics.
- Real-time reporting dashboard implemented.
- Mock drill conducted on ballot paper handling.
- Confidentiality and neutrality reinforced at all stages.
- COVID-19 safety kits provided to polling staff.
- Briefings held for all contesting candidates.
- Observer nominated by ECI for supervision.
- Instructions published in the Gazette of India.`,
  }
];

export default function CurrentIssues() {
  const downloadPDF = (title, date, content) => {
    const doc = new jsPDF();
    const margin = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
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
    <div className="issues-container">
      <h1 className="main-heading">Current Releases</h1>

      <div className="header-row">
        <h3 className="result-count">Found {issues.length} Result(s)</h3>
        <select className="sort-dropdown">
          <option>Sort By</option>
        </select>
      </div>

      <div className="issue-list">
        {issues.map((issue, index) => (
          <div key={issue.id} className="issue-item">
            <span
              className="issue-link"
              style={{ cursor: "pointer", color: "#1a0dab", textDecoration: "underline" }}
              onClick={() => downloadPDF(issue.title, issue.date, issue.content)}
            >
              <span className="issue-index">{index + 1} :</span> {issue.title}
            </span>
            <div className="issue-date">
              <FaCalendarAlt className="calendar-icon" /> {issue.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
