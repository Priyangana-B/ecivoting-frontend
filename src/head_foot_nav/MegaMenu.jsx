import React from 'react';
import './MegaMenu.css';
import { VscChromeClose } from 'react-icons/vsc'; // Icon for the close button

// Data for the menu links, organized by section
const menuSections = [
  {
    title: 'VOTERS',
    links: [
      { name: 'Register in Electoral Roll', href: '#' },
      { name: 'Track Application Status', href: '#' },
      { name: 'Download E-EPIC', href: '#' },
      { name: 'Search Electoral Roll', href: '#' },
      { name: 'Forms For Registration in Electoral Roll', href: '#' },
      { name: 'Know Your Polling Booth', href: '#' },
      { name: 'Service Voters', href: '#' },
      { name: 'Overseas Voters', href: '#' },
      { name: 'Register Complaint', href: '#' },
      { name: 'Voter Education', href: '#' },
    ],
    className: 'voters-section',
  },
  {
    title: 'ELECTION MANAGEMENT',
    links: [
      { name: 'Current Elections', href: '#' },
      { name: 'Past Assembly Elections', href: '#' },
      { name: 'Past Parliamentary Elections', href: '#' },
      { name: 'Past Bye Elections', href: '#' },
      { name: 'Term of The Houses', href: '#' },
      { name: 'Election Results', href: '#' },
      { name: 'Electoral Roll', href: '#' },
      { name: 'Model Code of Conduct', href: '#' },
      { name: 'Judicial Reference', href: '#' },
      { name: 'Delimitation', href: '#' },
    ],
    className: 'election-mgmt-section',
  },
  {
    title: 'POLITICAL PARTIES/CANDIDATE',
    links: [
      { name: 'Political Parties Registration', href: '#' },
      { name: 'Election Symbol', href: '#' },
      { name: 'Contribution Reports', href: '#' },
      { name: 'Expenditure Report', href: '#' },
      { name: 'Disclosure of Electoral Bonds', href: '#' },
      { name: 'Candidate Nomination and Other Forms', href: '#' },
      { name: 'Candidate Affidavits', href: '#' },
      { name: 'Candidate App', href: '#' },
    ],
  },
  {
    title: 'MEDIA & PUBLICATIONS',
    links: [
      { name: 'ECI Publications', href: '#' },
      { name: 'Compendium of Instructions', href: '#' },
      { name: 'Election Results & Statistics', href: '#' },
      { name: 'Narrative Report & Other Publications', href: '#' },
      { name: 'Electoral Statistics Pocket Books', href: '#' },
      { name: 'Miscellaneous Statistics & Papers', href: '#' },
    ],
  },
  {
    title: 'EVM/VVPAT',
    links: [
      { name: 'FAQs On EVM', href: '#' },
      { name: 'Presentation on EVM', href: '#' },
      { name: 'Status Paper on EVM', href: '#' },
      { name: 'Manual on EVM And VVPAT', href: '#' },
      { name: 'Legal History of EVMs And VVPATs', href: '#' },
    ],
  },
  {
    title: 'ECI OFFICIALS',
    links: [
      { name: 'Quick Links For ECI Officials', href: '#' },
      { name: 'ECI Instructions', href: '#' },
      { name: 'Observer Portal', href: '#' }, // Added
      { name: 'Handbooks/Manuals/Model Check List', href: '#' },
      { name: 'eBooks', href: '#' },
      { name: 'FAQs', href: '#' }, // Added
    ],
  },
  {
    title: 'ABOUT ECI',
    links: [
      { name: 'About ECI', href: '#' },
      { name: 'Hon\'ble Commission', href: '#' },
      { name: 'Former CEC/EC', href: '#' }, // Added
      { name: 'Directory', href: '#' },
      { name: 'International Cooperation', href: '#' },
      { name: 'Media Gallery', href: '#' }, // Added
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