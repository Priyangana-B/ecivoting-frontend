import "../assets/css/PoliticalPartiesCandidates/Constitutions.css";

const Constitutions = () => {
  const nationalParties = [
    { name: "ABC_1", symbol: "Rising Sun", emoji: "🌅" },
    { name: "ABC_2", symbol: "Dove", emoji: "🕊️" },
    { name: "ABC_3", symbol: "Handshake", emoji: "🤝" },
  ];

  const stateParties = [
    { name: "ABC_4", symbol: "Shield", emoji: "🛡️" },
    { name: "ABC_5", symbol: "Globe", emoji: "🌐" },
    { name: "ABC_6", symbol: "Leaf", emoji: "🍃" },
  ];

  return (
    <div className="constitutions">
      <div className="page-header">
        <div className="container">
          <h1>Constitutions of Political Parties</h1>
          <p>
            Constitutional documents of recognized national and state political parties
          </p>
        </div>
      </div>


      <div className="container">
        <div className="main-content">
          <section className="parties-section">
            <div className="parties-grid">

              {/* National Parties */}
              <div className="party-category">
                <h2>National Parties</h2>
                <div className="party-list">
                  {nationalParties.map((party, index) => (
                    <div key={index} className="party-item">
                      <div className="party-left">
                        <div className="party-emoji">{party.emoji}</div>
                        <div className="party-text">
                          <h3>{party.name}</h3>
                          <div className="party-symbol">Symbol: {party.symbol}</div>
                        </div>
                      </div>
                      <button className="btn btn-secondary">Download PDF</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* State Parties */}
              <div className="party-category">
                <h2>State Parties</h2>
                <div className="party-list">
                  {stateParties.map((party, index) => (
                    <div key={index} className="party-item">
                      <div className="party-left">
                        <div className="party-emoji">{party.emoji}</div>
                        <div className="party-text">
                          <h3>{party.name}</h3>
                          <div className="party-symbol">Symbol: {party.symbol}</div>
                        </div>
                      </div>
                      <button className="btn btn-secondary">Download PDF</button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Constitutions;
