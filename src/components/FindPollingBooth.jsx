import React from "react";
import "../assets/css/VoterEducation/FindPollingBooth.css";

const FindPollingBooth = () => {
  return (
    <div className="page-container">
      <h1 className="page-heading">Find Your Polling Booth</h1>
      <div className="page-content">
        <p>
          Knowing the exact location of your polling booth is crucial for
          casting your vote. The Election Commission of India ensures that every
          voter is assigned a specific polling station near their residence. The
          objective is to make voting convenient and accessible. This guide
          explains how you can find your booth online, offline, and through
          mobile apps, along with the rules to keep in mind.
        </p>

        <h2>What is a Polling Booth?</h2>
        <p>
          A polling booth is a designated location where registered voters of a
          constituency cast their votes. Typically, polling stations are set up
          in schools, community centers, or government buildings. Each booth is
          managed by polling officials appointed by the Election Commission.
        </p>

        <h2>How to Find Your Polling Booth Online</h2>
        <ol>
          <li>
            Visit{" "}
            <a href="https://electoralsearch.eci.gov.in" target="_blank" rel="noreferrer">
              electoralsearch.eci.gov.in
            </a>
            .
          </li>
          <li>Enter your EPIC number (Voter ID) or personal details.</li>
          <li>
            The portal will show your voter details, constituency, and polling
            booth location.
          </li>
          <li>Note down the address or take a printout for convenience.</li>
        </ol>

        <h2>Using the Voter Helpline App</h2>
        <p>
          The ECI’s Voter Helpline App is available on Android and iOS. After
          logging in with your EPIC number or personal details, you can easily
          locate your polling booth. The app also provides navigation using
          Google Maps.
        </p>

        <h2>Offline Methods</h2>
        <p>
          Booth Level Officers (BLOs) distribute voter slips before elections.
          These slips carry your name, constituency, and polling station
          details. You may also visit your local electoral office for the same
          information.
        </p>

        <h2>Why Booth Information Matters</h2>
        <ul>
          <li>
            Voting is allowed only at the designated booth assigned to a voter.
          </li>
          <li>
            Arriving at the wrong polling station means you cannot cast your
            vote.
          </li>
          <li>
            Booth locations are decided to ensure voters do not travel more than
            2 km in rural areas or 1 km in urban areas.
          </li>
        </ul>

        <h2>Special Arrangements</h2>
        <p>
          In remote or sensitive areas, ECI sets up model polling stations with
          extra facilities. Priority entry is given to senior citizens, women,
          and persons with disabilities. In many regions, pink booths staffed by
          women officials promote gender inclusivity.
        </p>

        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <strong>What if my name is missing?</strong> Apply with Form 6 and
            check again after updates.
          </li>
          <li>
            <strong>Can I vote at a different booth?</strong> No, voting is
            restricted to your assigned polling booth only.
          </li>
          <li>
            <strong>What should I carry?</strong> A valid photo ID and your
            voter slip.
          </li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Finding your polling booth is a simple but essential step before
          election day. With online search facilities, mobile apps, and voter
          slips, the Election Commission has ensured accessibility for everyone.
          A prepared voter is an empowered voter—know your booth, carry your ID,
          and cast your vote with confidence.
        </p>
      </div>
    </div>
  );
};

export default FindPollingBooth;
