import React from "react";
import DetailCard from "../components/DetailCard";

export default function WhyVotingMatters() {
  const sections = [
    {
      heading: "What Your Vote Really Does",
      text:
        "Voting is the simplest, most peaceful way to influence how your town, state, and country are run. Each ballot helps decide who writes laws, allocates budgets, and oversees services like schools, healthcare, roads, public safety, and welfare. When participation is broad and fair, elected bodies mirror the real diversity of the people—age, region, language, gender, income—leading to policies that are more balanced, inclusive, and effective. Even if a single race seems minor, the combined impact across local, state and national levels shapes your everyday life."
    },
    {
      heading: "Democracy Needs You",
      points: [
        "Representation: Legislatures only reflect citizens who actually show up.",
        "Accountability: Leaders perform better when they know voters are watching.",
        "Continuity & Stability: High participation reduces polarization and distrust.",
        "Rights Protection: Voting preserves civil liberties by rewarding pro-rights leadership.",
        "Local Impact: Municipal and panchayat decisions are felt first and most."
      ]
    },
    {
      heading: "Common Myths — Busted",
      points: [
        "“My vote won’t matter.” Close contests are routine; margins often come down to a handful of booths.",
        "“Only general elections matter.” Local elections decide water, roads, sanitation, markets and housing permissions.",
        "“All candidates are the same.” Compare their records, manifestos, conduct, and team; differences are clear with research.",
        "“Registration is hard.” It’s simpler than ever with online Form-6 and standard ID/residence proof.",
        "“I’ll register later.” Rolls close ahead of elections; act early to avoid missing deadlines."
      ]
    },
    {
      heading: "How to Make an Informed Choice",
      points: [
        "Study candidate history: previous posts, performance, attendance, and integrity.",
        "Read manifestos: focus on feasibility, timelines, and budget implications.",
        "Check local needs: employment, transport, safety, health, education, and climate resilience.",
        "Verify information: rely on credible news, official releases, and the ECI portal.",
        "Reject inducements: your vote is yours alone; bribery weakens your community."
      ]
    },
    {
      heading: "First-Time Voter? Start Here",
      text:
        "If you’re 18 or turning 18, enroll with Form-6 on the official portal. Keep a digital copy of age and residence proof ready. After submission, track your application and verify your name in the electoral roll. Learn how to locate your polling station, what ID to carry, and the steps inside a polling booth—from queue management and secrecy of the ballot to VVPAT verification. Encourage your peers to enroll too; youth participation improves the quality of leadership for years to come."
    },
    {
      heading: "Responsible Participation on Poll Day",
      points: [
        "Carry an accepted photo ID and check your polling station beforehand.",
        "Respect the Model Code of Conduct—no campaigning inside the booth area.",
        "Maintain secrecy of the ballot and avoid photographing the EVM.",
        "Verify your choice on the VVPAT screen (where available) before leaving.",
        "Help elders and persons with disabilities; request priority assistance if needed."
      ]
    },
    {
      heading: "After the Election",
      text:
        "Voting is not the end of citizenship; it’s the beginning of oversight. Follow how your representative keeps promises, attends sessions, uses funds, and responds to your locality. Participate in public consultations, RTI where appropriate, and budget reviews. Constructive feedback, community meetings, and lawful advocacy ensure that your single vote keeps working through the full term. Democracy grows stronger not only when we vote, but also when we stay engaged, informed, and respectful of institutions."
    }
  ];

  return (
    <DetailCard
      title="Why Voting Matters"
      subtitle="How your single vote protects rights, influences policy, and strengthens democracy."
      sections={sections}
    />
  );
}
