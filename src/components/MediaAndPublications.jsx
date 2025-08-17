import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaArrowDown
} from "react-icons/fa";
import '../assets/css/Media/MediaAndPublications.css';

const MediaAndPublications = () => {
  const [activeTab, setActiveTab] = useState('media');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const mediaItems = [
    {
      title: "Press Releases",
      description: `Stay updated with the official communications from the organization. This section includes statements issued to the media, highlighting key announcements, decisions, event details, and regulatory updates. Press releases aim to ensure transparency and keep the public informed.`,
      path: "/media/press-releases"
    },
    {
      title: "Current Issues",
      description: `Explore the latest issues under public and administrative attention. This includes real-time updates on challenges being addressed, policy debates, citizen concerns, and corrective measures underway. Stay informed on what's happening and how it's being handled.`,
      path: "/media/current-issues"
    },
    {
      title: "Photo Gallery",
      description: `Discover a rich collection of images capturing important events, outreach programs, and community initiatives. The gallery documents behind-the-scenes work, public engagements, and milestones to offer a visual narrative of the organization's journey.`,
      path: "/media/photos"
    },
    {
      title: "Video Gallery",
      description: `Watch official video content including speeches, awareness campaigns, tutorials, and event highlights. Videos enhance public understanding and provide an engaging way to learn about the organization's efforts, objectives, and impacts.`,
      path: "/media/video"
    }
  ];

  const publications = [
    {
      image: "/publication1-img.png",
      title: "ECI Publications",
      description: "List of latest ECI Publications and scanned publications containing about 1 Lakh scanned pages – of Commission's Publications since 1950s.",
      path: "/publications/eci-publications"
    },
    {
      image: "/publication2-img.png",
      title: "Election Result and Statistical Report",
      description: "Comprehensive reports on election outcomes, constituency-wise results, and statistical analysis of voter behavior and turnout trends.",
      path: "/publications/election-statistical-report"
    }
  ];

  const toggleDescription = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="media-pub-section">
      <div className="container">
        <h2 className="section-title">MEDIA & PUBLICATIONS</h2>
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'media' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('media');
              setExpandedIndex(null);
            }}
          >
            Media
          </button>
          <button
            className={`tab-btn ${activeTab === 'publications' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('publications');
              setExpandedIndex(null);
            }}
          >
            Publications
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'media' && (
            <div className="media-grid">
              {mediaItems.map((item, index) => (
                <div key={index} className="media-card">
                  <div className="media-header">
                    <h3>{item.title}</h3>
                    <button
                      onClick={() => toggleDescription(index)}
                      className="arrow-link"
                      aria-label={`Toggle ${item.title} details`}
                    >
                      {expandedIndex === index ? <FaArrowDown /> : <FaArrowRight />}
                    </button>
                  </div>
                  {expandedIndex === index && (
                    <>
                      <p className="media-description">{item.description}</p>
                      <Link to={item.path} className="view-more-link">View More →</Link>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'publications' && (
            <div className="publications-content">
              <h3>Recent Publications</h3>
              {publications.map((pub, index) => (
                <div key={index} className="publication-card">
                  <img src={pub.image} alt={pub.title} className="publication-image" />
                  <div className="publication-text">
                    <Link to={pub.path}>
                      <h4>{pub.title}</h4>
                      <p>{pub.description}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MediaAndPublications;
