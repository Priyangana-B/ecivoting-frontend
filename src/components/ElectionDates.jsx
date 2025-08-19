// src/pages/ElectionDates.jsx
import React from "react";
import DetailCard from "../components/DetailCard";

export default function ElectionDates() {
  const sections = [
    {
      heading: "Why Staying Updated Matters",
      text:
        "Elections follow strict timelines: nomination filing, voter roll revisions, polling days, counting, and results. Missing any deadline can cost you your vote. The ECI publishes official schedules across channels, and SVEEP runs awareness outreach (e.g., ‘Mission 60’ targeting low-turnout booths) to ensure widespread participation."
    },
    {
      heading: "Where to Find Official Dates",
      points: [
        "Visit the Election Commission’s official site for notifications.",
        "Check local SVEEP campaigns or voter helpline portals.",
        "Watch your constituency-level announcements and ERO notices."
      ]
    },
    {
      heading: "Set Reminders Smartly",
      points: [
        "Note key dates on your calendar (registration deadlines, polling day).",
        "Use the NVSP portal or apps for SMS/email reminders.",
        "Set personal alerts a week and 24 hours before polling."
      ]
    },
    {
      heading: "Why Timing Can Change",
      text:
        "Factors like adverse weather, legal rulings, or security may force rescheduling. Official sites remain the most reliable source for sudden changes or updates."
    }
  ];

  return (
    <DetailCard
      title="Election Dates & Reminders"
      subtitle="Never miss a vote—key timelines and reminders"
      sections={sections}
    />
  );
}
