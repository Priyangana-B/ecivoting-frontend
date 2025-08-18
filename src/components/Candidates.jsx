import { useState } from "react";
import "../assets/css/PoliticalPartiesCandidates/Candidates.css"; // Updated path

const candidateData = {
  "west-bengal": {
    kolkata: [
      { sl: 1, name: "Amit Ghosh", assembly: "Kolkata North" },
      { sl: 2, name: "Sneha Dutta", assembly: "Kolkata South" },
      { sl: 3, name: "Arindam Chatterjee", assembly: "Kolkata Central" },
      { sl: 4, name: "Puja Banerjee", assembly: "Kolkata East" },
      { sl: 5, name: "Rahul Sen", assembly: "Kolkata West" },
      { sl: 6, name: "Debashree Mukherjee", assembly: "Kolkata South-East" },
      { sl: 7, name: "Sourav Paul", assembly: "Kolkata South-West" },
      { sl: 8, name: "Pradip Roy", assembly: "Kolkata North-East" },
      { sl: 9, name: "Anjali Das", assembly: "Kolkata North-West" },
      { sl: 10, name: "Kiran Chakraborty", assembly: "Kolkata Cantonment" }
    ],
    howrah: [
      { sl: 1, name: "Rajat Sen", assembly: "Howrah East" },
      { sl: 2, name: "Prabir Mukherjee", assembly: "Howrah West" },
      { sl: 3, name: "Sudeshna Paul", assembly: "Howrah Central" },
      { sl: 4, name: "Manoj Das", assembly: "Howrah South" },
      { sl: 5, name: "Ruma Nandi", assembly: "Howrah North" },
      { sl: 6, name: "Partha Basu", assembly: "Howrah Cantonment" },
      { sl: 7, name: "Rekha Choudhury", assembly: "Howrah Riverside" },
      { sl: 8, name: "Satyajit Bose", assembly: "Howrah Industrial" },
      { sl: 9, name: "Meghna Saha", assembly: "Howrah Suburban" },
      { sl: 10, name: "Anup Ghosal", assembly: "Howrah University" }
    ],
    darjeeling: [
      { sl: 1, name: "Kiran Lama", assembly: "Darjeeling Town" },
      { sl: 2, name: "Pema Sherpa", assembly: "Kalimpong" },
      { sl: 3, name: "Rinchen Bhutia", assembly: "Mirik" },
      { sl: 4, name: "Anita Rai", assembly: "Kurseong" },
      { sl: 5, name: "Ravi Thapa", assembly: "Sonada" },
      { sl: 6, name: "Prakash Subba", assembly: "Sukna" },
      { sl: 7, name: "Nima Tamang", assembly: "Darjeeling Hills" },
      { sl: 8, name: "Manju Sherpa", assembly: "Lepcha Busty" },
      { sl: 9, name: "Roshan Chhetri", assembly: "Jorebungalow" },
      { sl: 10, name: "Sangita Chettri", assembly: "North Darjeeling" }
    ]
  },
  maharashtra: {
    mumbai: [
      { sl: 1, name: "Rajesh Patil", assembly: "Mumbai Central" },
      { sl: 2, name: "Anita Deshmukh", assembly: "Mumbai North" },
      { sl: 3, name: "Vikas Shinde", assembly: "Mumbai South" },
      { sl: 4, name: "Snehal Pawar", assembly: "Mumbai West" },
      { sl: 5, name: "Sunil Kamat", assembly: "Mumbai East" },
      { sl: 6, name: "Sangeeta Bhosle", assembly: "Mumbai Harbour" },
      { sl: 7, name: "Prashant More", assembly: "Mumbai Suburban" },
      { sl: 8, name: "Meenal Desai", assembly: "Mumbai City" },
      { sl: 9, name: "Ravi Kadam", assembly: "Mumbai Island" },
      { sl: 10, name: "Suhas Patkar", assembly: "Mumbai Hills" }
    ],
    pune: [
      { sl: 1, name: "Ajay Kulkarni", assembly: "Pune Central" },
      { sl: 2, name: "Priya Gokhale", assembly: "Pune North" },
      { sl: 3, name: "Harish Patankar", assembly: "Pune South" },
      { sl: 4, name: "Manisha Jagtap", assembly: "Pune East" },
      { sl: 5, name: "Nilesh Pande", assembly: "Pune West" },
      { sl: 6, name: "Ramesh Gaikwad", assembly: "Pune Cantonment" },
      { sl: 7, name: "Smita Bhonsale", assembly: "Pune City" },
      { sl: 8, name: "Vivek Deshmukh", assembly: "Pune University" },
      { sl: 9, name: "Deepa Sathe", assembly: "Pune Tech Park" },
      { sl: 10, name: "Girish Ranade", assembly: "Pune Rural" }
    ],
    nagpur: [
      { sl: 1, name: "Ashok Chavan", assembly: "Nagpur East" },
      { sl: 2, name: "Anuja Salunkhe", assembly: "Nagpur West" },
      { sl: 3, name: "Shivraj Kale", assembly: "Nagpur Central" },
      { sl: 4, name: "Meena Joshi", assembly: "Nagpur North" },
      { sl: 5, name: "Prasad Borkar", assembly: "Nagpur South" },
      { sl: 6, name: "Ravi Ingle", assembly: "Nagpur Rural" },
      { sl: 7, name: "Smita Kumbhare", assembly: "Nagpur City" },
      { sl: 8, name: "Gaurav Phadke", assembly: "Nagpur Metro" },
      { sl: 9, name: "Pooja Mahajan", assembly: "Nagpur Suburban" },
      { sl: 10, name: "Nitin Rathi", assembly: "Nagpur IT Park" }
    ]
  },
  "uttar-pradesh": {
    lucknow: [
      { sl: 1, name: "Anil Yadav", assembly: "Lucknow North" },
      { sl: 2, name: "Priya Sharma", assembly: "Lucknow South" },
      { sl: 3, name: "Deepak Singh", assembly: "Lucknow Central" },
      { sl: 4, name: "Swati Verma", assembly: "Lucknow East" },
      { sl: 5, name: "Rajeev Mishra", assembly: "Lucknow West" },
      { sl: 6, name: "Rohit Pandey", assembly: "Lucknow Cantonment" },
      { sl: 7, name: "Nidhi Saxena", assembly: "Lucknow University" },
      { sl: 8, name: "Arun Chauhan", assembly: "Lucknow Industrial" },
      { sl: 9, name: "Meera Gupta", assembly: "Lucknow Suburban" },
      { sl: 10, name: "Sandeep Yadav", assembly: "Lucknow IT Park" }
    ],
    kanpur: [
      { sl: 1, name: "Amit Verma", assembly: "Kanpur East" },
      { sl: 2, name: "Rekha Tiwari", assembly: "Kanpur West" },
      { sl: 3, name: "Pankaj Singh", assembly: "Kanpur North" },
      { sl: 4, name: "Shalini Saxena", assembly: "Kanpur South" },
      { sl: 5, name: "Vikas Dubey", assembly: "Kanpur Central" },
      { sl: 6, name: "Anita Yadav", assembly: "Kanpur University" },
      { sl: 7, name: "Raj Kumar", assembly: "Kanpur Cantonment" },
      { sl: 8, name: "Neha Mishra", assembly: "Kanpur Industrial" },
      { sl: 9, name: "Ashish Patel", assembly: "Kanpur Suburban" },
      { sl: 10, name: "Ritu Sharma", assembly: "Kanpur Metro" }
    ],
    varanasi: [
      { sl: 1, name: "Ramesh Gupta", assembly: "Varanasi South" },
      { sl: 2, name: "Sunita Singh", assembly: "Varanasi North" },
      { sl: 3, name: "Alok Tiwari", assembly: "Varanasi Central" },
      { sl: 4, name: "Meenakshi Patel", assembly: "Varanasi East" },
      { sl: 5, name: "Saurabh Verma", assembly: "Varanasi West" },
      { sl: 6, name: "Anupam Yadav", assembly: "Varanasi University" },
      { sl: 7, name: "Ritu Singh", assembly: "Varanasi Cantonment" },
      { sl: 8, name: "Kapil Mishra", assembly: "Varanasi Industrial" },
      { sl: 9, name: "Nisha Sharma", assembly: "Varanasi Suburban" },
      { sl: 10, name: "Mohit Chauhan", assembly: "Varanasi Metro" }
    ]
  },
  karnataka: {
    bengaluru: [
      { sl: 1, name: "Harish Gowda", assembly: "Bengaluru South" },
      { sl: 2, name: "Anil Kumar", assembly: "Bengaluru North" },
      { sl: 3, name: "Suresh Reddy", assembly: "Bengaluru East" },
      { sl: 4, name: "Divya Shetty", assembly: "Bengaluru West" },
      { sl: 5, name: "Mahesh Nayak", assembly: "Bengaluru Central" },
      { sl: 6, name: "Shilpa Ramesh", assembly: "Bengaluru Cantonment" },
      { sl: 7, name: "Nandan Pai", assembly: "Bengaluru Rural" },
      { sl: 8, name: "Vidya Rao", assembly: "Electronic City" },
      { sl: 9, name: "Girish Bhat", assembly: "Whitefield" },
      { sl: 10, name: "Krishna Murthy", assembly: "Yelahanka" }
    ],
    mysuru: [
      { sl: 1, name: "Manjunath Rao", assembly: "Mysuru East" },
      { sl: 2, name: "Anita Prasad", assembly: "Mysuru West" },
      { sl: 3, name: "Shankar Nayak", assembly: "Mysuru Central" },
      { sl: 4, name: "Radhika Hegde", assembly: "Mysuru South" },
      { sl: 5, name: "Sudeep Rao", assembly: "Mysuru North" },
      { sl: 6, name: "Nisha Gowda", assembly: "Mysuru Rural" },
      { sl: 7, name: "Harsha Kumar", assembly: "Mysuru Industrial" },
      { sl: 8, name: "Vinay Bhat", assembly: "Mysuru University" },
      { sl: 9, name: "Shruti Shetty", assembly: "Mysuru Suburban" },
      { sl: 10, name: "Ramesh Pai", assembly: "Mysuru Metro" }
    ]
  },
  "tamil-nadu": {
    chennai: [
      { sl: 1, name: "Sundar Rajan", assembly: "Chennai South" },
      { sl: 2, name: "Latha Kumari", assembly: "Chennai North" },
      { sl: 3, name: "Ramesh Karthik", assembly: "Chennai East" },
      { sl: 4, name: "Divya Natarajan", assembly: "Chennai West" },
      { sl: 5, name: "Vignesh Subramaniam", assembly: "Chennai Central" },
      { sl: 6, name: "Preethi Raj", assembly: "Chennai Cantonment" },
      { sl: 7, name: "Manoj Kumar", assembly: "Chennai Harbour" },
      { sl: 8, name: "Sujatha Ramesh", assembly: "Chennai Tech Park" },
      { sl: 9, name: "Ajay Srinivas", assembly: "Chennai University" },
      { sl: 10, name: "Kavitha Elangovan", assembly: "Chennai Suburban" }
    ],
    coimbatore: [
      { sl: 1, name: "Karthik Raj", assembly: "Coimbatore North" },
      { sl: 2, name: "Meera Shankar", assembly: "Coimbatore South" },
      { sl: 3, name: "Prakash Iyer", assembly: "Coimbatore Central" },
      { sl: 4, name: "Radha Krishnan", assembly: "Coimbatore East" },
      { sl: 5, name: "Suresh Kumar", assembly: "Coimbatore West" },
      { sl: 6, name: "Shalini Menon", assembly: "Coimbatore Cantonment" },
      { sl: 7, name: "Mohanraj Pandian", assembly: "Coimbatore University" },
      { sl: 8, name: "Vishal Balaji", assembly: "Coimbatore Metro" },
      { sl: 9, name: "Sathya Narayanan", assembly: "Coimbatore Rural" },
      { sl: 10, name: "Rekha Manohar", assembly: "Coimbatore IT Park" }
    ]
  },
  kerala: {
    thiruvananthapuram: [
      { sl: 1, name: "Anoop Menon", assembly: "Thiruvananthapuram Central" },
      { sl: 2, name: "Lakshmi Nair", assembly: "Thiruvananthapuram North" },
      { sl: 3, name: "Ravi Pillai", assembly: "Thiruvananthapuram South" },
      { sl: 4, name: "Bindu Ramesh", assembly: "Thiruvananthapuram East" },
      { sl: 5, name: "Prakash Warrier", assembly: "Thiruvananthapuram West" },
      { sl: 6, name: "Suresh Menon", assembly: "Thiruvananthapuram Harbour" },
      { sl: 7, name: "Mini Krishnan", assembly: "Thiruvananthapuram Tech Park" },
      { sl: 8, name: "Vivek Kumar", assembly: "Thiruvananthapuram Cantonment" },
      { sl: 9, name: "Gopika Suresh", assembly: "Thiruvananthapuram University" },
      { sl: 10, name: "Rohit Varma", assembly: "Thiruvananthapuram Suburban" }
    ],
    kochi: [
      { sl: 1, name: "Arjun Joseph", assembly: "Kochi Central" },
      { sl: 2, name: "Neethu Thomas", assembly: "Kochi North" },
      { sl: 3, name: "Jithin Kurian", assembly: "Kochi South" },
      { sl: 4, name: "Roshni Mathew", assembly: "Kochi East" },
      { sl: 5, name: "Basil George", assembly: "Kochi West" },
      { sl: 6, name: "Greeshma Lal", assembly: "Kochi Harbour" },
      { sl: 7, name: "Nithin Alex", assembly: "Kochi Tech Park" },
      { sl: 8, name: "Sneha Joseph", assembly: "Kochi Cantonment" },
      { sl: 9, name: "Anand Prakash", assembly: "Kochi University" },
      { sl: 10, name: "Fathima Beevi", assembly: "Kochi Suburban" }
    ]
  }
};

const districtOptions = {
  "west-bengal": ["kolkata", "howrah", "darjeeling"],
  maharashtra: ["mumbai", "pune", "nagpur"],
  "uttar-pradesh": ["lucknow", "kanpur", "varanasi"],
  karnataka: ["bengaluru", "mysuru"],
  "tamil-nadu": ["chennai", "coimbatore"],
  kerala: ["thiruvananthapuram", "kochi"]
};

  
  

export default function Candidates() {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [candidates, setCandidates] = useState([]);

  const handleStateChange = (e) => {
    setState(e.target.value);
    setDistrict("");
    setCandidates([]);
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);
    if (state && selectedDistrict && candidateData[state]) {
      setCandidates(candidateData[state][selectedDistrict] || []);
    } else {
      setCandidates([]);
    }
  };

  return (
    <section className="candidates-section">
      <div className="section-header">
        <div className="section-icon">🗳️</div>
        <h2>Assembly Candidates</h2>
      </div>

      <p className="section-description">
        Select your state and district to view the candidates contesting from that assembly.
      </p>

      <div className="selection-container">
        <div className="form-group">
          <label>Select State</label>
          <select value={state} onChange={handleStateChange}>
            <option value="">-- Choose Your State --</option>
            <option value="west-bengal">West Bengal</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="uttar-pradesh">Uttar Pradesh</option>
            <option value="karnataka">Karnataka</option>
            <option value="tamil-nadu">Tamil Nadu</option>
          </select>
        </div>

        <div className="form-group">
          <label>Select District</label>
          <select value={district} onChange={handleDistrictChange} disabled={!state}>
            <option value="">-- Choose Your District --</option>
            {state &&
              districtOptions[state]?.map((dist) => (
                <option key={dist} value={dist}>
                  {dist.charAt(0).toUpperCase() + dist.slice(1)}
                </option>
              ))}
          </select>
        </div>
      </div>

      {candidates.length > 0 && (
        <table className="candidates-table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Candidate Name</th>
              <th>Assembly Name</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c, index) => (
              <tr key={index}>
                <td>{c.sl}</td>
                <td>{c.name}</td>
                <td>{c.assembly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
