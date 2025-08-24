import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Common layout imports
import Header from "./head_foot_nav/Header";
import Footer from "./head_foot_nav/Footer";
import MegaMenu from "./head_foot_nav/MegaMenu";

// Component imports
import Home from "./components/Home";
import Electors_Home from "./components/Electors_Home";
import Register from "./components/Register";
import SearchElectoralRoll from "./components/SearchElectoralRoll";
import DownloadEpic from "./components/DownloadEpic";
import UpdateDetails from "./components/UpdateDetails";
import DeleteApplication from "./components/DeleteApplication";

import Media_Publication_Home from "./components/Media_Publication_Home";
import MediaAndPublications from "./components/MediaAndPublications";
import Media from "./components/Media";
import PressReleases from "./components/PressReleases";
import About from "./components/About";
import CurrentIssues from "./components/CurrentIssues";
import PhotoGallery from "./components/PhotoGallery";
import VideoGallery from "./components/VideoGallery";
import BulletinList from "./components/BulletinList";
import PressReleaseDetail from "./components/PressReleaseDetail";

import Political_Parties_Candidates_Home from "./components/Political_Parties_Candidates_Home";
import PoliticalPartyRegistration from "./components/PoliticalPartyRegistration";
import PPRTMS from "./components/PPRTMS";
import PoliticalPartiesSymbol from "./components/PoliticalPartiesSymbol";
import Constitutions from "./components/Constitutions";
import OrganizationalElection from "./components/OrganizationalElection";
import Guidelines from "./components/Guidelines";
import ApplicationForm from "./components/ApplicationForm";
import Candidates from "./components/Candidates";
import ComplaintForm from "./components/ComplaintForm";
import SampleConstitution from "./components/SampleConstitution";

import VoterEducation_Home from "./components/VoterEducation_Home";
import WhyVotingMatters from "./components/WhyVotingMatters";
import HowToRegister from "./components/HowToRegister";
import KnowYourCandidate from "./components/KnowYourCandidate";
import VotingProcess from "./components/VotingProcess";
import ElectionDates from "./components/ElectionDates";
import YouthCorner from "./components/YouthCorner";
import RegisterToVote from "./components/RegisterToVote";
import HowToVote from "./components/HowToVote";
import FindPollingBooth from "./components/FindPollingBooth";

import ElectionManagement_Home from "./components/ElectionManagement_Home";
import LokSabhaPortal from "./components/LokSabhaPortal";
import BidhanSabhaPortal from "./components/BidhanSabhaPortal";
import RajyaSabhaPortal from "./components/RajyaSabhaPortal";

import OnlineVoting_Home from "./components/OnlineVoting/OnlineVoting_Home";


// Layout Wrapper to conditionally show Header/Footer
function Layout({ children }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Don't show Header & Footer on Online Voting page
  const hideHeaderFooter = location.pathname === "/OnlineVoting_Home";

  return (
    <div className="App">
      {!hideHeaderFooter && (
        <>
          <Header onMenuOpen={() => setMenuOpen(true)} />
          {menuOpen && <MegaMenu onClose={() => setMenuOpen(false)} />}
        </>
      )}

      {children}

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Electors */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Electors_Home" element={<Electors_Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/SearchElectoralRoll" element={<SearchElectoralRoll />} />
          <Route path="/DownloadEpic" element={<DownloadEpic />} />
          <Route path="/UpdateDetails" element={<UpdateDetails />} />
          <Route path="/DeleteApplication" element={<DeleteApplication />} />

          {/* Media and Publications */}
          <Route path="/Media_Publication_Home" element={<Media_Publication_Home />} />
          <Route path="/MediaAndPublications" element={<MediaAndPublications />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/press-releases" element={<PressReleases />} />
          <Route path="/media/about" element={<About />} />
          <Route path="/media/current-issues" element={<CurrentIssues />} />
          <Route path="/media/photos" element={<PhotoGallery />} />
          <Route path="/media/video" element={<VideoGallery />} />
          <Route path="/media/bulletins" element={<BulletinList />} />
          <Route path="/media/press-releases/:id" element={<PressReleaseDetail />} />

          {/* Political Parties and Candidates */}
          <Route path="/Political_Parties_Candidates_Home" element={<Political_Parties_Candidates_Home />} />
          <Route path="/political-party-registration" element={<PoliticalPartyRegistration />} />
          <Route path="/pprtms" element={<PPRTMS />} />
          <Route path="/political-parties-symbol" element={<PoliticalPartiesSymbol />} />
          <Route path="/constitutions" element={<Constitutions />} />
          <Route path="/organizational-election" element={<OrganizationalElection />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/complaint-form" element={<ComplaintForm />} />
          <Route path="/sample-constitution" element={<SampleConstitution />} />

          {/* Voter Education */}
          <Route path="/VoterEducation_Home" element={<VoterEducation_Home />} />
          <Route path="/WhyVotingMatters" element={<WhyVotingMatters />} />
          <Route path="/HowToRegister" element={<HowToRegister />} />
          <Route path="/KnowYourCandidate" element={<KnowYourCandidate />} />
          <Route path="/VotingProcess" element={<VotingProcess />} />
          <Route path="/ElectionDates" element={<ElectionDates />} />
          <Route path="/YouthCorner" element={<YouthCorner />} />
          <Route path="/RegisterToVote" element={<RegisterToVote />} />
          <Route path="/HowToVote" element={<HowToVote />} />
          <Route path="/FindPollingBooth" element={<FindPollingBooth />} />

          {/* Election Management */}
          <Route path="/ElectionManagement_Home" element={<ElectionManagement_Home />} />
          <Route path="/LokSabhaPortal" element={<LokSabhaPortal />} />
          <Route path="/BidhanSabhaPortal" element={<BidhanSabhaPortal />} />
          <Route path="/RajyaSabhaPortal" element={<RajyaSabhaPortal />} />

          {/* Online Voting (NO HEADER & FOOTER) */}
          <Route path="/OnlineVoting_Home" element={<OnlineVoting_Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
