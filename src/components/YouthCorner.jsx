// src/pages/YouthCorner.jsx
import React from "react";
import DetailCard from "../components/DetailCard";

export default function YouthCorner() {
  const sections = [
    {
      heading: "Your Power Begins Here",
      text:
        "As a first-time voter, you bring fresh energy and perspective. SVEEP and ECI have tailored programs—via Electoral Literacy Clubs, social media outreach, and drive-based campaigns—to register and inform young voters. Your participation boosts accountability and inspires peers."
    },
    {
      heading: "Quick Steps for First-time Voters",
      points: [
        "Fill Form-6 online or offline to enroll.",
        "Check your entry in the electoral roll and EPIC issuance.",
        "Visit local ELC (Electoral Literacy Club) events or SVEEP camps if available."
      ]
    },
    {
      heading: "Make Voting Fun and Safe",
      points: [
        "Attend mock polling or EVM demos at campus events.",
        "Follow youth-oriented voter advocacy content from SVEEP.",
        "Plan with friends: registration fishbowl, buddy systems for booth visits."
      ]
    },
    {
      heading: "Why Your Vote Matters",
      text:
        "Youth votes shape policies on education, employment, climate, and digital rights—issues that affect your future. High youth turnout signals to representatives that your generation demands action."
    }
  ];

  return (
    <DetailCard
      title="Youth & First-time Voters’ Corner"
      subtitle="Your guide to entering democracy confidently"
      sections={sections}
    />
  );
}
