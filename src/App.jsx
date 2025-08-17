import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Electors_Home from './components/Electors_Home';
import Register from './components/Register';
import SearchElectoralRoll from './components/SearchElectoralRoll';
import DownloadEpic from './components/DownloadEpic';
import UpdateDetails from './components/UpdateDetails';
import DeleteApplication from './components/DeleteApplication';


import Navbar from "./components/Navbar";
import Media_Publication_Home from "./components/Media_Publication_Home";
import MediaAndPublications from './components/MediaAndPublications';
import Media from "./components/Media";
import PressReleases from "./components/PressReleases";
import About from "./components/About";
import CurrentIssues from "./components/CurrentIssues";
import PhotoGallery from "./components/PhotoGallery";
import VideoGallery from "./components/VideoGallery";
import BulletinList from "./components/BulletinList";
import PressReleaseDetail from "./components/PressReleaseDetail";


// Import other components...

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        {/* Define routes for the application */}
        <Routes>
          {/* Electors */}
          <Route path="/" element={<Home />} />
          <Route path="/Electors_Home" element={<Electors_Home />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/SearchElectoralRoll' element={<SearchElectoralRoll />} />
          <Route path="/DownloadEpic" element={<DownloadEpic />} />
          <Route path="/UpdateDetails" element={<UpdateDetails />} />
          <Route path="/DeleteApplication" element={<DeleteApplication/>} />

          {/* media and publications */}
          <Route path="/Media_Publication_Home" element={<Media_Publication_Home />} />
          <Route path="/MediaAndPublications" element={<MediaAndPublications/>} />
        <Route path="/media" element={<Media />} />
        <Route path="/media/press-releases" element={<PressReleases />} />
        <Route path="/media/about" element={<About />} />
        <Route path="/media/current-issues" element={<CurrentIssues />} />
        <Route path="/media/photos" element={<PhotoGallery />} />
        <Route path="/media/video" element={<VideoGallery />} />
        <Route path="/media/bulletins" element={<BulletinList />} />
        <Route path="/media/press-releases/:id" element={<PressReleaseDetail />} />
          
          
         
          {/* Add other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
