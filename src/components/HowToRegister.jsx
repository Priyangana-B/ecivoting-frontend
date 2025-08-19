// src/pages/HowToRegister.jsx
import React from "react";
import DetailCard from "../components/DetailCard";

export default function HowToRegister() {
  const sections = [
    {
      heading: "Why Registration Matters",
      text:
        "Registering to vote ensures your voice is counted, prevents fraudulent voting, and strengthens democratic governance by ensuring only eligible citizens participate. The Election Commission of India undertakes continuous efforts through its SVEEP (Systematic Voters’ Education and Electoral Participation) program to reach out and educate citizens about this first vital step in democracy. SVEEP contributes via information, motivation, and facilitation to make registration accessible across demographics."
    },
    {
      heading: "Who Can Register",
      points: [
        "All Indian citizens aged 18 and above.",
        "Must be a resident in the constituency where you wish to register.",
        "Cannot be disqualified under any law from voting."
      ]
    },
    {
      heading: "How to Register – Online Method",
      text:
        "Visit the National Voters’ Service Portal (NVSP) and fill out Form-6 with accurate personal details. Upload scanned documents for your age, residence, and identity. After submission, track your application status online to ensure successful inclusion in the electoral roll."
    },
    {
      heading: "How to Register – Offline Method",
      points: [
        "Obtain Form-6 from your local Electoral Registration Office (ERO), BLO, or designated center.",
        "Fill it carefully with required personal and address details.",
        "Submit with photocopies of age and residence proof.",
        "Optional assistance can be provided by the Booth Level Officer (BLO)."
      ]
    },
    {
      heading: "Post-Submission Follow-up",
      text:
        "Once submitted, your application is verified through documents and site verification. You can track approval status on NVSP or contact your BLO. After approval, check your name and EPIC number in the electoral roll."
    }
  ];

  return (
    <DetailCard
      title="How to Register to Vote"
      subtitle="Your step-by-step guide to getting enrolled in the electoral roll"
      sections={sections}
    />
  );
}
