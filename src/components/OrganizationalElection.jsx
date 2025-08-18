import "../assets/css/PoliticalPartiesCandidates/OrganizationalElection.css"


const OrganizationalElection = () => {
  return (
    <div className="organizational-election">
      <div className="page-header">
        <div className="container">
          <h1>Organizational Election</h1>
          <p>Organizational elections of recognized national and state political parties</p>
        </div>
      </div>


      
      <div className="container">
        <div className="main-content">
          <section className="info-section">
            <div className="info-cards">
              <div className="info-card">
                <h3>Election Requirements</h3>
                <ul>
                  <li>Regular organizational elections every 5 years</li>
                  <li>Democratic process for office bearer selection</li>
                  <li>Transparent voting mechanism</li>
                  <li>Compliance with party constitution</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>Reporting Obligations</h3>
                <ul>
                  <li>Submit election reports to ECI</li>
                  <li>Provide list of elected office bearers</li>
                  <li>Document election process and results</li>
                  <li>Maintain election records</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default OrganizationalElection
