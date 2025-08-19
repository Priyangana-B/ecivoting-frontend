import React from "react";
import "../assets/css/VoterEducation/HowToVote.css";

const RegisterToVote = () => {
  return (
    <div className="page-container">
      <h1 className="page-heading">Register to Vote</h1>
      <div className="page-content">
        <p>
          Registering to vote is the foundational step in participating in a democracy. 
          The Election Commission of India (ECI) has provided citizens with multiple 
          convenient options—both online and offline—to ensure that every eligible 
          Indian has the chance to exercise their democratic right. 
        </p>

        <h2>Why Voter Registration Matters</h2>
        <p>
          Without registration, you cannot cast your vote. Registering ensures that 
          your name is correctly entered in the electoral roll of your constituency. 
          It also helps in avoiding duplication and ensures that elections remain free, 
          fair, and transparent. Voter registration is not just a formality—it is a 
          safeguard of democracy and a way to protect your constitutional right.
        </p>

        <h2>Eligibility Criteria</h2>
        <ul>
          <li>You must be a citizen of India.</li>
          <li>You must be at least 18 years old on the qualifying date (1st January of the year).</li>
          <li>You must be ordinarily resident in the constituency where you are applying.</li>
          <li>You must not be disqualified due to reasons of unsound mind or corrupt practices.</li>
        </ul>

        <h2>Steps for Online Voter Registration</h2>
        <p>
          The National Voter Service Portal (NVSP) is the official platform for 
          online voter registration. Here is a step-by-step guide:
        </p>
        <ol>
          <li>Visit <a href="https://www.nvsp.in" target="_blank" rel="noreferrer">www.nvsp.in</a>.</li>
          <li>Select "Apply online for new voter registration".</li>
          <li>Fill out **Form 6** with your personal details, address, and date of birth.</li>
          <li>Upload the required documents (proof of age, proof of residence, and a passport-size photo).</li>
          <li>Submit the application and note the reference ID for future tracking.</li>
        </ol>

        <h2>Offline Voter Registration</h2>
        <p>
          For those who prefer or require offline registration:
        </p>
        <ul>
          <li>Visit your nearest Electoral Registration Officer (ERO) or Booth Level Officer (BLO).</li>
          <li>Fill out Form 6 (available at election offices and designated centers).</li>
          <li>Attach photocopies of required documents along with photographs.</li>
          <li>Submit to the BLO or the office of ERO.</li>
        </ul>

        <h2>Documents Required</h2>
        <p>Commonly accepted documents include:</p>
        <ul>
          <li>Age Proof: Birth certificate, Class 10 marksheet, Aadhaar card, or passport.</li>
          <li>Residence Proof: Utility bill, ration card, Aadhaar card, or rental agreement.</li>
          <li>Photograph: A recent passport-size photograph.</li>
        </ul>

        <h2>Special Categories</h2>
        <p>
          <strong>NRI Voters:</strong> Indian citizens living abroad can register by submitting 
          Form 6A online or offline.  
          <br />
          <strong>Service Voters:</strong> Members of the armed forces and government employees 
          posted abroad can register using Form 2, Form 3, or Form 6A depending on the category.  
          <br />
          <strong>Persons with Disabilities (PwD):</strong> Special provisions and BLOs are 
          available to ensure inclusivity in the registration process.  
        </p>

        <h2>Tracking Your Application</h2>
        <p>
          Once submitted, you can track the status of your voter registration 
          on the NVSP portal using the reference ID provided. You will also be 
          informed once your application is approved or if further documents are required.
        </p>

        <h2>Common Issues and Solutions</h2>
        <ul>
          <li><strong>Name not appearing in electoral roll:</strong> Submit a fresh Form 6.</li>
          <li><strong>Wrong details:</strong> Use Form 8 to correct entries.</li>
          <li><strong>Change of residence:</strong> Submit Form 6 again for your new constituency.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Registering to vote is more than a legal necessity—it is a civic duty. 
          The process has been simplified by the ECI to make sure no citizen is left 
          out of the democratic process. Take the first step today and ensure that 
          your voice is heard in shaping India’s future.
        </p>
      </div>
    </div>
  );
};

export default RegisterToVote;
