import React from 'react';

const VoteSuccess = ({ voterData, locationData, voteData }) => {
  const handleDownloadReceipt = () => {
    const receiptContent = `
VOTING RECEIPT
==============

Voter Information:
Name: ${voterData.name}
Voter ID: ${voterData.voterId}

Location:
State: ${locationData.state}
District: ${locationData.district}
Assembly: ${locationData.assembly}

Vote Details:
Candidate: ${voteData.candidateName}
Party: ${voteData.candidateParty}
Date & Time: ${voteData.timestamp}
Vote ID: ${voteData.voteId}

Thank you for participating in the democratic process!
    `;

    const element = document.createElement('a');
    const file = new Blob([receiptContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `vote-receipt-${voteData.voteId}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="voting-container final-success" style={{ display: 'block' }}>
      {/* <div className="header">
        <h2>🎉 Vote Successful!</h2>
        <p>Thank you for participating in the democratic process.</p>
      </div> */}
{/* 
      <div className="final-message">
        Your vote has been recorded and submitted to the election system.
      </div> */}

      <div className="vote-receipt">
        <h3>📜 Vote Receipt</h3>
        <p><strong>Voter:</strong> {voterData.name}</p>
        <p><strong>Voter ID:</strong> {voterData.voterId}</p>
        <p><strong>State:</strong> {locationData.state}</p>
        <p><strong>District:</strong> {locationData.district}</p>
        <p><strong>Assembly:</strong> {locationData.assembly}</p>
        <p><strong>Candidate Voted:</strong> {voteData.candidateName} ({voteData.candidateParty})</p>
        <p><strong>Date & Time:</strong> {voteData.timestamp}</p>
        <p><strong>Vote ID:</strong> {voteData.voteId}</p>
      </div>

      <div className="vote-actions">
        <button 
          type="button" 
          className="download-btn"
          onClick={handleDownloadReceipt}
        >
          📄 Submit Your Vote
        </button>
        
      </div>
    </div>
  );
};

export default VoteSuccess;