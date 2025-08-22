import React from 'react';

const VoteSuccess = ({ voterData, locationData, voteData }) => {
  const handleDownloadReceipt = () => {
    // Structure the receipt data as a JSON object
    const receiptData = {
      receiptTitle: "VOTING RECEIPT",
      voterInformation: {
        name: voterData.name,
        voterId: voterData.voterId
      },
      location: {
        state: locationData.state,
        district: locationData.district,
        assembly: locationData.assembly
      },
      voteDetails: {
        candidate: voteData.candidateName,
        party: voteData.candidateParty,
        dateTime: voteData.timestamp,
        voteId: voteData.voteId
      },
      message: "Thank you for participating in the democratic process!",
      timestamp: new Date().toISOString(),
      receiptGenerated: true
    };

    // Convert the object to a JSON string with proper formatting
    const jsonContent = JSON.stringify(receiptData, null, 2); // null, 2 for pretty-printing

    // Create and download the JSON file
    const element = document.createElement('a');
    const file = new Blob([jsonContent], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = `vote-receipt-${voteData.voteId}.json`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    // Clean up the URL object to free memory
    URL.revokeObjectURL(element.href);
  };

  return (
    <div className="voting-container final-success" style={{ display: 'block' }}>
      <div className="header">
        <h2>🎉 Vote Successful!</h2>
        <p>Thank you for participating in the democratic process.</p>
      </div>
      
      <div className="final-message">
        Your vote has been recorded and submitted to the election system.
      </div> 

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
