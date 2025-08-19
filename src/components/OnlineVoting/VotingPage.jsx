import React, { useState, useEffect } from 'react';
import { candidatesData } from './candidatesData';

const VotingPage = ({ voterData, locationData, onComplete, onBack }) => {
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const assemblyCandidates = candidatesData[locationData.assemblyKey] || [];
    setCandidates(assemblyCandidates);
  }, [locationData.assemblyKey]);

  const handleCandidateSelect = (candidateId) => {
    setSelectedCandidate(candidateId.toString());
  };

  const handleCastVote = () => {
    if (selectedCandidate) {
      const candidate = candidates.find(c => c.id.toString() === selectedCandidate);
      const voteData = {
        candidateId: selectedCandidate,
        candidateName: candidate.name,
        candidateParty: candidate.party,
        timestamp: new Date().toLocaleString(),
        voteId: 'VOTE' + Date.now().toString()
      };
      onComplete(voteData);
    }
  };

  return (
    <div className="voting-container voting-page" style={{ display: 'block' }}>
      <div className="header">
        <h1>Cast Your Vote</h1>
        <p>Select your preferred candidate below</p>
      </div>

      <div className="voter-info">
        <h3>Voter Details</h3>
        <p><strong>Name:</strong> {voterData.name}</p>
        <p><strong>Voter ID:</strong> {voterData.voterId}</p>
      </div>

      <div className="constituency-info">
        <h3>Constituency Information</h3>
        <p><strong>State:</strong> {locationData.state}</p>
        <p><strong>District:</strong> {locationData.district}</p>
        <p><strong>Assembly:</strong> {locationData.assembly}</p>
      </div>

      <div className="candidates-container">
        {candidates.length === 0 ? (
          <div className="error" style={{ display: 'block', textAlign: 'center' }}>
            No candidates found for this constituency.
          </div>
        ) : (
          candidates.map(candidate => (
            <div
              key={candidate.id}
              className={`candidate-card ${selectedCandidate === candidate.id.toString() ? 'selected' : ''}`}
              onClick={() => handleCandidateSelect(candidate.id)}
            >
              <input
                type="radio"
                name="candidate"
                value={candidate.id}
                checked={selectedCandidate === candidate.id.toString()}
                onChange={() => handleCandidateSelect(candidate.id)}
                className="vote-radio"
              />
              
              <div className="candidate-header">
                <div className="candidate-photo">
                  {candidate.photo}
                </div>
                <div className="candidate-info">
                  <h4>{candidate.name}</h4>
                  <p><strong>{candidate.party}</strong></p>
                </div>
              </div>
              
              <div className="candidate-details">
                <p><strong>Promises:</strong> {candidate.promises}</p>
                <p><strong>Experience:</strong> {candidate.experience}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="vote-actions">
        <button type="button" className="back-btn" onClick={onBack}>
          Back to Location
        </button>
        <button
          type="button"
          className="cast-vote-btn"
          onClick={handleCastVote}
          disabled={!selectedCandidate}
        >
          Cast Your Vote
        </button>
      </div>
    </div>
  );
};

export default VotingPage;
