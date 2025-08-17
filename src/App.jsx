import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Electors_Home from './components/Electors_Home';
import Register from './components/Register';
import SearchElectoralRoll from './components/SearchElectoralRoll';
import DownloadEpic from './components/DownloadEpic';
import UpdateDetails from './components/UpdateDetails';
import DeleteApplication from './components/DeleteApplication';


// Import other components...

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Electors_Home" element={<Electors_Home />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/SearchElectoralRoll' element={<SearchElectoralRoll />} />
          <Route path="/DownloadEpic" element={<DownloadEpic />} />
          <Route path="/UpdateDetails" element={<UpdateDetails />} />
          <Route path="/DeleteApplication" element={<DeleteApplication/>} />
          
          
         
          {/* Add other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
