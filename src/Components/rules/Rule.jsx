import React from "react";
import "../../Styles/rule.css";

function Rule() {
  return (
    <div className="rules-container">
      <h1 className="rules-title">General Guidelines</h1>

      {/* Dress Code Section */}
      <div className="rule-section">
        <h2 className="rule-heading">🚀 Dress Code:</h2>

        <h3 className="sub-heading">For Boys:</h3>
        <ul className="rule-list">
          <li>Collared shirts or plain T-shirts in solid colors or subtle patterns</li>
          <li>Full-length formal trousers or well-fitted jeans without rips, tears, or excessive fading</li>
          <li>Formal shoes or clean, well-maintained sneakers</li>
        </ul>

        <h3 className="sub-heading">For Girls:</h3>
        <ul className="rule-list">
          <li>Kurtis or modest T-shirts in solid colors or subtle patterns</li>
          <li>Full-length pants, salwar kameez, or palazzos</li>
          <li>A stole, shawl, or dupatta is mandatory with any type of top</li>
          <li>Formal flats, sandals, or clean, well-maintained sneakers</li>
        </ul>

        <h3 className="sub-heading">Strictly Prohibited:</h3>
        <ul className="rule-list">
          <li>Sleeveless tops</li>
          <li>Body-fit or overly tight outfits</li>
          <li>Ripped, torn, or heavily faded jeans</li>
          <li>Bathroom slippers or casual flip-flops</li>
        </ul>
      </div>

      {/* College ID Section */}
      <div className="rule-section">
        <h2 className="rule-heading">🎫 College ID:</h2>
        <p>
          Presentation of a valid college ID card is compulsory for participation in the event.
        </p>
      </div>

      {/* Event Essentials Section */}
      <div className="rule-section">
        <h2 className="rule-heading">💻 Event Essentials:</h2>
        <p>
          Participants are required to bring their laptops or other necessary materials as specified in the respective event instructions.
        </p>
      </div>

      {/* General Conduct Section */}
      <div className="rule-section">
        <h2 className="rule-heading">🎯 General Conduct:</h2>
        <p>
          All participants are expected to uphold discipline, maintain proper decorum, and conduct themselves in a professional manner throughout the event.
        </p>
      </div>
    </div>
  );
}

export default Rule;