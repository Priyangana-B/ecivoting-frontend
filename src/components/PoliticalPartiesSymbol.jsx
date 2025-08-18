import { useState } from "react";
import "../assets/css/PoliticalPartiesCandidates/PoliticalPartiesSymbol.css";

const PoliticalPartiesSymbol = () => {
  const [activeTab, setActiveTab] = useState("reserved");

  const reservedSymbols = [
    { name: "Rising Sun", emoji: "🌅", party: "ABC_1", status: "National Party" },
    { name: "Dove", emoji: "🕊️", party: "ABC_2", status: "National Party" },
    { name: "Handshake", emoji: "🤝", party: "ABC_3", status: "National Party" },
    { name: "Shield", emoji: "🛡️", party: "ABC_4", status: "State Party" },
    { name: "Globe", emoji: "🌐", party: "ABC_5", status: "State Party" },
    { name: "Leaf", emoji: "🍃", party: "ABC_6", status: "State Party" },
  ];

  const freeSymbols = [
    { name: "Anchor", emoji: "⚓" },
    { name: "Arrow", emoji: "➡️" },
    { name: "Basket", emoji: "🧺" },
    { name: "Bridge", emoji: "🌉" },
    { name: "Clock", emoji: "⏰" },
    { name: "Compass", emoji: "🧭" },
    { name: "Feather", emoji: "🪶" },
    { name: "Fountain", emoji: "⛲" },
    { name: "Helmet", emoji: "⛑️" },
    { name: "Ladder", emoji: "🪜" },
    { name: "Leafy Branch", emoji: "🌿" },
    { name: "Light Bulb", emoji: "💡" },
    { name: "Lotus Pot", emoji: "🪷" },
    { name: "Spade", emoji: "♠️" },
    { name: "Wheel", emoji: "⚙️" },
    { name: "Whistle", emoji: "📯" }
  ];

  return (
    <div className="political-parties-symbol">
      <div className="page-header">
        <div className="container">
          <h1>Political Parties & Election Symbol</h1>
          <p>Allotment of reserved symbols and election symbol management</p>
        </div>
      </div>


      <div className="container">
        <div className="main-content">
          <section className="symbol-tabs">
            <div className="tab-buttons">
              <button
                className={`tab-btn ${activeTab === "reserved" ? "active" : ""}`}
                onClick={() => setActiveTab("reserved")}
              >
                Reserved Symbols
              </button>
              <button
                className={`tab-btn ${activeTab === "free" ? "active" : ""}`}
                onClick={() => setActiveTab("free")}
              >
                Free Symbols
              </button>
              <button
                className={`tab-btn ${activeTab === "guidelines" ? "active" : ""}`}
                onClick={() => setActiveTab("guidelines")}
              >
                Guidelines
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "reserved" && (
                <div className="reserved-symbols">
                  <h2>Reserved Symbols</h2>
                  <p>Symbols reserved for recognized national and state political parties</p>
                  <div className="symbols-grid">
                    {reservedSymbols.map((symbol, index) => (
                      <div key={index} className="symbol-card">
                        <div className="symbol-icon">{symbol.emoji}</div>
                        <h3>{symbol.name}</h3>
                        <p className="party-name">{symbol.party}</p>
                        <span
                          className={`status-badge ${symbol.status.toLowerCase().replace(" ", "-")}`}
                        >
                          {symbol.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "free" && (
                <div className="free-symbols">
                  <h2>Free Symbols</h2>
                  <p>Available symbols for unrecognized parties and independent candidates</p>
                  <div className="free-symbols-grid">
                    {freeSymbols.map((symbol, index) => (
                      <div key={index} className="free-symbol-item">
                        <div className="symbol-icon">{symbol.emoji}</div>
                        <span>{symbol.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "guidelines" && (
                <div className="guidelines-content">
                  <h2>Symbol Allotment Guidelines</h2>
                  <div className="guidelines-sections">
                    <div className="guideline-section">
                      <h3>Reserved Symbols</h3>
                      <ul>
                        <li>Reserved for recognized national and state parties</li>
                        <li>Cannot be allotted to any other party or candidate</li>
                        <li>Protected under Election Symbols Order, 1968</li>
                        <li>Exclusive use throughout the country/state</li>
                      </ul>
                    </div>

                    <div className="guideline-section">
                      <h3>Free Symbols</h3>
                      <ul>
                        <li>Available for unrecognized parties and independents</li>
                        <li>Allotted on first-come-first-served basis</li>
                        <li>Valid only for specific constituency/election</li>
                        <li>Cannot conflict with reserved symbols</li>
                      </ul>
                    </div>

                    <div className="guideline-section">
                      <h3>Symbol Disputes</h3>
                      <ul>
                        <li>Election Commission has final authority</li>
                        <li>Disputes resolved based on party constitution</li>
                        <li>Interim orders may freeze symbols</li>
                        <li>Appeal process available for decisions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="symbol-application">
            <h2 className="section-title">Symbol Application Process</h2>
            <div className="process-cards">
              <div className="process-card">
                <div className="process-number">1</div>
                <h3>Application Submission</h3>
                <p>Submit application for symbol allotment with required documents</p>
              </div>

              <div className="process-card">
                <div className="process-number">2</div>
                <h3>Verification</h3>
                <p>Election Commission verifies eligibility and documentation</p>
              </div>

              <div className="process-card">
                <div className="process-number">3</div>
                <h3>Symbol Allotment</h3>
                <p>Appropriate symbol allotted based on party status and availability</p>
              </div>

              <div className="process-card">
                <div className="process-number">4</div>
                <h3>Notification</h3>
                <p>Official notification issued with symbol details and conditions</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PoliticalPartiesSymbol;
