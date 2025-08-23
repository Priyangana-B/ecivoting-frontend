import React from 'react';
import axios from 'axios';

const VoteSuccess = ({ voterData, locationData, voteData }) => {
  const handleDownloadReceipt = async () => {
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

    // Prepare data for backend (matches VoteCast schema)
    const votePayload = {
      name: voterData.name,
      state: locationData.state,
      district: locationData.district,
      assembly: locationData.assembly,
      voterId: voterData.voterId,
      candidate: voteData.candidateName,
      party: voteData.candidateParty,
      voteId: voteData.voteId
    };

    try {
      // Send POST request to backend
      const response = await axios.post('http://localhost:4500/api/votes', votePayload);
      console.log('Vote stored successfully:', response.data);
      alert('Successfully submitted vote to server!');

      // Proceed with download only if backend save succeeds
      const jsonContent = JSON.stringify(receiptData, null, 2);
      const element = document.createElement('a');
      const file = new Blob([jsonContent], { type: 'application/json' });
      element.href = URL.createObjectURL(file);
      element.download = `vote-receipt-${voteData.voteId}.json`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      URL.revokeObjectURL(element.href);
    } catch (err) {
  console.error('Error storing vote:', err);
  console.log('Server response:', err.response ? err.response.data : err.message);
  alert('Failed to submit vote to server. Please try again.');
}
  };

  return (
    <div className="voting-container final-success" style={{ display: 'block' }}>
      
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