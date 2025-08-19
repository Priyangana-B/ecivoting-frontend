// src/pages/KnowYourCandidate.jsx
import React from "react";
import DetailCard from "../components/DetailCard";

export default function KnowYourCandidate() {
  const sections = [
    {
      heading: "Importance of Informed Voting",
      text:
        "Democracy thrives when voters make educated choices. The Election Commission of India provides comprehensive data through its VoICE_NET and Candidate Affidavit portals, enabling voters to view candidates’ past performance, criminal records, assets, and party manifestos. To strengthen democratic ethics, SVEEP emphasizes quality electoral participation—where voters act on information, not inducements."
    },
    {
      heading: "Where to Find Candidate Information",
      points: [
        "Candidate affidavits containing criminal background, assets, education.",
        "Party manifestos outlining policies and priorities.",
        "Official party websites and verified public channels."
      ]
    },
    {
      heading: "How to Evaluate Candidates",
      points: [
        "Compare candidates’ declared assets or criminal cases.",
        "Match manifesto pledges with local needs and feasibility.",
        "Look at their past track record if they held previous offices.",
        "Engage in public debates or consult trusted reliable sources."
      ]
    },
    {
      heading: "Why It Matters Locally",
      text:
        "Local representation directly impacts your daily life—water, roads, healthcare, education. Voting without awareness risks entrusting power without accountability. Informed voters drive better governance."
    }
  ];

  return (
    <DetailCard
      title="Know Your Candidate and Party"
      subtitle="Make informed choices—know who’s representing you"
      sections={sections}
    />
  );
}
