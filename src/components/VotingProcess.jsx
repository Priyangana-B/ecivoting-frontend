// src/pages/VotingProcess.jsx
import React from "react";
import DetailCard from "../components/DetailCard";

export default function VotingProcess() {
  const sections = [
    {
      heading: "Before You Vote",
      points: [
        "Ensure your name appears in the electoral roll and carry your EPIC (Voter ID) or any valid ID.",
        "Know your polling station location and timing.",
        "Follow SVEEP’s outreach campaigns for updates and reminders."
      ]
    },
    {
      heading: "At the Polling Station",
      text:
        "On election day, approach your assigned polling station. Verify your identity with the poll officer. You will be marked with indelible ink. Receive a ballot slip and proceed to the EVM booth."
    },
    {
      heading: "Electronic Voting Machine (EVM) & VVPAT",
      points: [
        "Select your candidate using EVM buttons.",
        "VVPAT (Voter Verifiable Paper Audit Trail) prints and displays your choice briefly—validate it before leaving.",
        "This adds a layer of transparency."
      ]
    },
    {
      heading: "At the Booth & After Voting",
      points: [
        "Do not carry mobile phones or campaign materials inside.",
        "Maintain ballot secrecy.",
        "Avoid photographing your vote.",
        "Exit quietly after casting."
      ]
    }
  ];

  return (
    <DetailCard
      title="Voting Process Explained"
      subtitle="Clear steps to help you cast your vote confidently"
      sections={sections}
    />
  );
}
