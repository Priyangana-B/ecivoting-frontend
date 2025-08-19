import React from "react";
import "../assets/css/VoterEducation/HowToVote.css";

const HowToVote = () => {
  return (
    <div className="page-container">
      <h1 className="page-heading">How to Vote</h1>
      <div className="page-content">
        <p>
          Voting is the most important democratic exercise that allows citizens
          to choose their representatives and influence the direction of the
          government. The Election Commission of India (ECI) has designed a
          clear and systematic process to make voting accessible, secure, and
          transparent. This guide explains everything a voter should know, from
          preparations before election day to the actual process of casting a
          vote.
        </p>

        <h2>Before Election Day</h2>
        <p>
          Preparation is crucial. Citizens should ensure their names are present
          in the electoral roll. Without this, they will not be allowed to vote.
          Verification can be done online at{" "}
          <a href="https://www.nvsp.in" target="_blank" rel="noreferrer">
            NVSP
          </a>{" "}
          or through the Voter Helpline App. Voters should also carry a valid
          photo identity card—primarily the Voter ID card, but other IDs such as
          Aadhaar, passport, or driving license are also accepted.
        </p>

        <h2>Finding Your Polling Booth</h2>
        <p>
          Every voter is assigned a specific polling booth. The details can be
          checked on the ECI website or through voter slips distributed by Booth
          Level Officers (BLOs). Arriving at the correct polling station is
          essential since a person can vote only at their designated location.
        </p>

        <h2>Polling Day Guidelines</h2>
        <ol>
          <li>Carry your Voter ID card and any additional accepted photo ID.</li>
          <li>
            Check your name on the voter list displayed at the polling station.
          </li>
          <li>Maintain decorum, follow COVID-19 guidelines (if applicable).</li>
          <li>
            Mobile phones and cameras are generally not allowed inside the
            polling booth.
          </li>
        </ol>

        <h2>Step-by-Step Voting Process</h2>
        <ol>
          <li>
            <strong>Identification:</strong> On arrival, polling officials check
            your identity and confirm your details against the voter list.
          </li>
          <li>
            <strong>Ink Marking:</strong> An indelible ink mark is applied on
            your finger to signify that you have voted.
          </li>
          <li>
            <strong>Issuance of Slip:</strong> A signed voter slip is handed
            over to you.
          </li>
          <li>
            <strong>Ballot or EVM:</strong> You are directed towards the ballot
            unit or Electronic Voting Machine (EVM).
          </li>
          <li>
            <strong>Secrecy:</strong> Step into the voting compartment and press
            the button against the candidate of your choice.
          </li>
          <li>
            <strong>VVPAT Verification:</strong> The Voter Verified Paper Audit
            Trail (VVPAT) shows your vote for a few seconds before it drops into
            a sealed box.
          </li>
        </ol>

        <h2>Special Assistance</h2>
        <p>
          Persons with disabilities, elderly citizens, and pregnant women are
          provided priority entry. Wheelchairs, volunteers, and ramps are made
          available. Special mobile apps like “Saksham” allow differently-abled
          voters to request assistance in advance.
        </p>

        <h2>What Not To Do While Voting</h2>
        <ul>
          <li>Do not carry mobile phones or cameras inside the polling area.</li>
          <li>
            Do not attempt to influence other voters—it is a punishable offense.
          </li>
          <li>
            Do not engage in campaigning within 200 meters of the polling
            station.
          </li>
          <li>
            Do not press multiple buttons on the EVM—it will record only the
            first valid entry.
          </li>
        </ul>

        <h2>After Voting</h2>
        <p>
          Once your vote is cast, polling officials may guide you to the exit.
          Remember, you can cast your vote only once. The indelible ink mark on
          your finger ensures transparency and prevents double voting.
        </p>

        <h2>Importance of Secret Ballot</h2>
        <p>
          Every vote is confidential. The secrecy of your choice is protected by
          law. This ensures voters are free from intimidation or pressure. The
          polling booth arrangement, voting compartments, and EVM design all
          guarantee that no one can know who you voted for.
        </p>

        <h2>Conclusion</h2>
        <p>
          Voting is both a right and a responsibility. By following the proper
          process, every citizen contributes to strengthening democracy. The
          Election Commission’s guidelines ensure fairness, accessibility, and
          transparency. On election day, take pride in pressing that button—it
          is your voice, your choice, and your contribution to India’s future.
        </p>
      </div>
    </div>
  );
};

export default HowToVote;
