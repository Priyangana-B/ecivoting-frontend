import React, { useState, useEffect } from 'react';
import { locationData } from './locationData';

const LocationFilter = ({ voterData, onComplete, onBack }) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedAssembly, setSelectedAssembly] = useState('');
  const [districts, setDistricts] = useState([]);
  const [assemblies, setAssemblies] = useState([]);

  useEffect(() => {
    if (selectedState && locationData[selectedState]) {
      const districtData = locationData[selectedState].districts;
      setDistricts(Object.keys(districtData).map(key => ({
        key,
        name: districtData[key].name
      })));
    } else {
      setDistricts([]);
    }
    setSelectedDistrict('');
    setSelectedAssembly('');
    setAssemblies([]);
  }, [selectedState]);

  useEffect(() => {
    if (selectedState && selectedDistrict && locationData[selectedState].districts[selectedDistrict]) {
      const assemblyData = locationData[selectedState].districts[selectedDistrict].assemblies;
      setAssemblies(Object.keys(assemblyData).map(key => ({
        key,
        name: assemblyData[key]
      })));
    } else {
      setAssemblies([]);
    }
    setSelectedAssembly('');
  }, [selectedState, selectedDistrict]);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleAssemblyChange = (e) => {
    setSelectedAssembly(e.target.value);
  };

  const handleProceed = () => {
    if (selectedState && selectedDistrict && selectedAssembly) {
      const locationInfo = {
        state: locationData[selectedState].name,
        stateKey: selectedState,
        district: locationData[selectedState].districts[selectedDistrict].name,
        districtKey: selectedDistrict,
        assembly: locationData[selectedState].districts[selectedDistrict].assemblies[selectedAssembly],
        assemblyKey: selectedAssembly
      };
      onComplete(locationInfo);
    }
  };

  const isProceedDisabled = !selectedState || !selectedDistrict || !selectedAssembly;

  return (
    <div className="voting-container location-filter" style={{ display: 'block' }}>
      <div className="header">
        <h1>Select Your Location</h1>
        <p>Choose your state, district, and assembly constituency</p>
      </div>

      <div className="location-info">
        <h3>Voter Information</h3>
        <p><strong>Name:</strong> {voterData.name}</p>
        <p><strong>Voter ID:</strong> {voterData.voterId}</p>
      </div>

      <div className="filter-row">
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="">Select State</option>
            {Object.keys(locationData).map(stateKey => (
              <option key={stateKey} value={stateKey}>
                {locationData[stateKey].name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="district">District:</label>
          <select
            id="district"
            value={selectedDistrict}
            onChange={handleDistrictChange}
            disabled={!selectedState}
          >
            <option value="">Select District</option>
            {districts.map(district => (
              <option key={district.key} value={district.key}>
                {district.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group filter-full">
        <label htmlFor="assembly">Assembly Constituency:</label>
        <select
          id="assembly"
          value={selectedAssembly}
          onChange={handleAssemblyChange}
          disabled={!selectedDistrict}
        >
          <option value="">Select Assembly Constituency</option>
          {assemblies.map(assembly => (
            <option key={assembly.key} value={assembly.key}>
              {assembly.name}
            </option>
          ))}
        </select>
      </div>

      <div className="vote-actions">
        <button type="button" className="back-btn" onClick={onBack}>
          Back to Registration
        </button>
        <button
          type="button"
          className="submit-btn"
          onClick={handleProceed}
          disabled={isProceedDisabled}
          style={{ flex: 1 }}
        >
          Proceed to Candidates
        </button>
      </div>
    </div>
  );
};

export default LocationFilter;
