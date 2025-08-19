import React, { useState } from 'react';
import VoterRegistration from './VoterRegistration';
import LocationFilter from './LocationFilter';
import VotingPage from './VotingPage';
import VoteSuccess from './VoteSuccess';
import './OnlineVoting.css';

function OnlineVoting_Home() {
  const [currentStep, setCurrentStep] = useState('registration'); // 'registration', 'location', 'voting', 'success'
  const [voterData, setVoterData] = useState({});
  const [locationData, setLocationData] = useState({});
  const [voteData, setVoteData] = useState({});

  const handleRegistrationComplete = (data) => {
    setVoterData(data);
    setCurrentStep('location');
  };

  const handleLocationComplete = (data) => {
    setLocationData(data);
    setCurrentStep('voting');
  };

  const handleVotingComplete = (data) => {
    setVoteData(data);
    setCurrentStep('success');
  };

  const handleBackToRegistration = () => {
    setCurrentStep('registration');
    setVoterData({});
    setLocationData({});
    setVoteData({});
  };

  const handleBackToLocation = () => {
    setCurrentStep('location');
    setVoteData({});
  };

  const handleNewVote = () => {
    setCurrentStep('registration');
    setVoterData({});
    setLocationData({});
    setVoteData({});
  };

  return (
    <div className="App">
      {currentStep === 'registration' && (
        <VoterRegistration onComplete={handleRegistrationComplete} />
      )}
      
      {currentStep === 'location' && (
        <LocationFilter
          voterData={voterData}
          onComplete={handleLocationComplete}
          onBack={handleBackToRegistration}
        />
      )}
      
      {currentStep === 'voting' && (
        <VotingPage
          voterData={voterData}
          locationData={locationData}
          onComplete={handleVotingComplete}
          onBack={handleBackToLocation}
        />
      )}
      
      {currentStep === 'success' && (
        <VoteSuccess
          voterData={voterData}
          locationData={locationData}
          voteData={voteData}
          onNewVote={handleNewVote}
        />
      )}
    </div>
  );
}

export default OnlineVoting_Home;
