import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/VoterEducation/LiveVoteCount.css";

const parties = [
  { name: "Jan Pragati Manch", color: "#4caf50", votes: 0, logo: "🌅" },
  { name: "Lok Shakti Morcha", color: "#2196f3", votes: 0, logo: "🤝" },
  { name: "Independent", color: "#f44336", votes: 0, logo: "🍃" },
  { name: "Lok Samaj Dal", color: "#ff9800", votes: 0, logo: "🌐" },
  { name: "Niti Parishad", color: "#9c27b0", votes: 0, logo: "🕊️" },
];

export default function LiveVoteCount() {
  const [partyData, setPartyData] = useState(parties);

  useEffect(() => {
    const fetchVoteDashboard = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/voters`);
        const dashboardData = response.data.data;

        setPartyData(prev =>
          prev.map(p => ({
            ...p,
            votes: dashboardData.find(d => d.partyName === p.name)?.voteCount || 0
          }))
        );
      } catch (err) {
        console.error("Error fetching vote dashboard:", err);
      }
    };

    fetchVoteDashboard(); // Initial fetch
    const interval = setInterval(fetchVoteDashboard, 5000); // Update every 5 seconds
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