import "../assets/css/PoliticalPartiesCandidates/Guidelines.css";

const Guidelines = () => {
  return (
    <div className="guidelines">
      <div className="page-header">
        <div className="container">
          <h1>Guidelines for Political Parties</h1>
          <p>
            Comprehensive rules to ensure transparency, accountability, and
            compliance with election laws.
          </p>
        </div>
      </div>



      <div className="container">
        <div className="main-content">
          <section className="guidelines-content">
            <div className="guidelines-grid">
              {/* Financial Management */}
              <div className="guideline-card">
                <h3>Financial Transparency & Accountability</h3>
                <ul>
                  <li>Maintain accurate and audited records of income and expenditure.</li>
                  <li>Disclose all funding sources exceeding prescribed limits.</li>
                  <li>Submit annual financial statements and audit reports to the Election Commission.</li>
                  <li>Ensure compliance with foreign contribution regulations and corporate donation rules.</li>
                </ul>
              </div>

              {/* Election Expenses */}
              <div className="guideline-card">
                <h3>Election Expenditure & Reporting</h3>
                <ul>
                  <li>Strictly adhere to expenditure limits set by the Election Commission.</li>
                  <li>Maintain receipts and vouchers for all campaign-related spending.</li>
                  <li>Submit detailed election expenditure reports within stipulated deadlines.</li>
                  <li>Ensure transparency in candidate-level spending and party-level advertisements.</li>
                </ul>
              </div>

              {/* Organizational & Compliance */}
              <div className="guideline-card">
                <h3>Organizational Structure & Compliance</h3>
                <ul>
                  <li>Conduct internal organizational elections at regular intervals.</li>
                  <li>Uphold democratic decision-making processes within the party structure.</li>
                  <li>Keep party constitution and contact details updated with the Election Commission.</li>
                  <li>Strictly follow the Model Code of Conduct and respond promptly to ECI notices.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
