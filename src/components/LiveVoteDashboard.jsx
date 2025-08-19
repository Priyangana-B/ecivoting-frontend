import React, { useState, useEffect } from "react";
import "../assets/css/VoterEducation/LiveVoteCount.css";

const parties = [
  { name: "Party A", color: "#4caf50", votes: 0, logo: "🟢" },
  { name: "Party B", color: "#2196f3", votes: 0, logo: "🔵" },
  { name: "Party C", color: "#f44336", votes: 0, logo: "🔴" },
  { name: "Party D", color: "#ff9800", votes: 0, logo: "🟠" },
  { name: "Party E", color: "#9c27b0", votes: 0, logo: "🟣" },
];

export default function LiveVoteCount() {
  const [partyData, setPartyData] = useState(parties);

  // Simulate live vote updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPartyData(prev =>
        prev.map(p => ({
          ...p,
          votes: p.votes + Math.floor(Math.random() * 50) // random increment
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Total votes for percentage calculation
  const totalVotes = partyData.reduce((sum, p) => sum + p.votes, 0);

  return (
    <div className="vote-dashboard">
      <h2>Live Vote Count</h2>
      <div className="vote-cards">
        {partyData.map((party, index) => {
          const percentage = totalVotes ? ((party.votes / totalVotes) * 100).toFixed(1) : 0;
          return (
            <div key={index} className="vote-card">
              <div className="vote-header">
                <span className="party-logo">{party.logo}</span>
                <h3>{party.name}</h3>
              </div>
              <p className="votes">{party.votes.toLocaleString()} votes</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${percentage}%`, backgroundColor: party.color }}
                ></div>
              </div>
              <p className="percentage">{percentage}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
