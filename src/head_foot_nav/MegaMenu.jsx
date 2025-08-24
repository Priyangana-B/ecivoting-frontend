import React from 'react';
import './MegaMenu.css';
import { VscChromeClose } from 'react-icons/vsc'; // Icon for the close button
import Register from "../components/Register";
// Data for the menu links, organized by section
const menuSections = [
  {
    title: 'Home',
    links: [
      { name: 'Home', href: 'Home' },
      
    ],
    className: 'Home',
  },
  {
    title: 'ELECTORS',
    links: [
      { name: 'Register in Electoral Roll', href: 'Register' },
      { name: 'Download E-EPIC', href: 'DownloadEpic' },
      { name: 'Search Electoral Roll', href: 'SearchElectoralRoll' },
      { name: 'Update Elector Details', href: 'UpdateDetails' },
      { name: 'Delete Elector Details', href: 'DeleteApplication' },
      
    ],
    className: 'voters-section',
  },
  {
    title: 'ELECTION MANAGEMENT',
    links: [
      { name: 'Home', href: 'ElectionManagement_Home' },
      { name: 'Lok Sabha Portal', href: 'LokSabhaPortal' },
      { name: 'Rajya Sabha Portal', href: 'RajyaSabhaPortal' },
      { name: 'Bidhan Sabha Portal', href: 'BidhanSabhaPortal' },
    ],
    className: 'election-mgmt-section',
  },
  {
    title: 'POLITICAL PARTIES/CANDIDATE',
    links: [
      { name: 'Political Parties Registration', href: 'application-form' },
      { name: 'Election Symbol', href: 'poltical-parties-symbol' },
      { name: 'Constitutions', href: 'constitutions' },
      { name: 'Track Applications', href: 'pprtms' },
      { name: 'Organizational Elections', href: 'organizational-election' },
      { name: 'Guidelines', href: 'guidelines' },
      { name: 'Disputes and Merger Filings', href: 'complaint-form' },
   
    ],
  },
  {
    title: 'MEDIA & PUBLICATIONS',
    links: [
      { name: 'Press Releases', href: 'press-releases' },
      { name: 'Current Issues', href: 'current-issues' },
      { name: 'Media-Photos', href: 'media/photos' },
      { name: 'Media-Videos', href: 'media/videos' },

    ],
  },
  
  
  {
    title: 'VOTER EDUCATION',
    links: [
      { name: 'Home', href: 'VoterEducation_Home' },
      { name: 'Register To Vote', href: 'RegisterToVote' },
      { name: 'How To Vote', href: 'HowToVote' }, 
      { name: 'Find Polling Booth', href: 'FindPollingBooth' },
      { name: 'Why Voting Matters', href: 'WhyVotingMatters' },
      { name: 'Know Your Candidate', href: 'KnowYourCandidate' }, 
      { name: 'Voting Process', href: 'VotingProcess' }, 
      { name: 'Election Dates', href: 'ElectionDates' }, 
      { name: 'Youth Corner', href: 'YouthCorner' }, 
    ],
  },
];


const MegaMenu = ({ onClose }) => {
  return (
    <div className="mega-menu-overlay">
      <button onClick={onClose} className="close-button" aria-label="Close menu">
        <VscChromeClose />
      </button>
      <nav className="mega-menu-content">
        {menuSections.map((section, index) => (
          <div key={index} className={`menu-column ${section.className || ''}`}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MegaMenu;