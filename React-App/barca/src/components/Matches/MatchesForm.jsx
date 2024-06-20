import React, { useState } from "react";

const MatchesForm = ({ addMatch }) => {
  const [matchType, setMatchType] = useState("home");
  const [opponent, setOpponent] = useState("");
  const [resultHome, setResultHome] = useState("");
  const [resultAway, setResultAway] = useState("");
  const [matchDate, setMatchDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMatch = {
      id: Date.now(),
      matchType,
      opponent,
      resultHome,
      resultAway,
      matchDate,
    };

    addMatch(newMatch);

    setMatchType("home");
    setOpponent("");
    setResultHome("");
    setResultAway("");
    setMatchDate("");
  };

  return (
    <div className="form-container">
      <h2>Add Match</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="match-type">Match Type:</label>
        <select
          id="match-type"
          name="match-type"
          value={matchType}
          onChange={(e) => setMatchType(e.target.value)}
          required
        >
          <option value="home">Home</option>
          <option value="away">Away</option>
        </select>
        <br />
        <label htmlFor="opponent">Opponent:</label>
        <input
          type="text"
          id="opponent"
          name="opponent"
          value={opponent}
          onChange={(e) => setOpponent(e.target.value)}
          required
        />
        <br />
        <div className="result-input">
          <label htmlFor="result">Result:</label>
          <input
            type="number"
            id="result-home"
            name="result-home"
            min="0"
            value={resultHome}
            onChange={(e) => setResultHome(e.target.value)}
            required
          />
          <span> : </span>
          <input
            type="number"
            id="result-away"
            name="result-away"
            min="0"
            value={resultAway}
            onChange={(e) => setResultAway(e.target.value)}
            required
          />
        </div>
        <br />
        <label htmlFor="match-date">Date:</label>
        <input
          type="date"
          id="match-date"
          name="match-date"
          value={matchDate}
          onChange={(e) => setMatchDate(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add Match</button>
      </form>
    </div>
  );
};

export default MatchesForm;
