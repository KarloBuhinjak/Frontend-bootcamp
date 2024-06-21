import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/update.css";

const UpdateMatch = () => {
  const [matchType, setMatchType] = useState("home");
  const [opponent, setOpponent] = useState("");
  const [resultHome, setResultHome] = useState(0);
  const [resultAway, setResultAway] = useState(0);
  const [matchDate, setMatchDate] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const matches = JSON.parse(localStorage.getItem("matches"));
    const matchToUpdate = matches.find((match) => match.id === parseInt(id));
    if (matchToUpdate) {
      setMatchType(matchToUpdate.matchType);
      setOpponent(matchToUpdate.opponent);
      setResultHome(matchToUpdate.resultHome);
      setResultAway(matchToUpdate.resultAway);
      setMatchDate(matchToUpdate.matchDate);
    } else {
      alert("Match not found!");
      navigate("/matches");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedMatch = {
      id: parseInt(id),
      matchType,
      opponent,
      resultHome,
      resultAway,
      matchDate,
    };

    let matches = JSON.parse(localStorage.getItem("matches"));
    matches = matches.map((match) =>
      match.id === updatedMatch.id ? updatedMatch : match
    );
    localStorage.setItem("matches", JSON.stringify(matches));

    alert("Match updated successfully.");
    navigate("/matches");
  };

  return (
    <div className="content">
      <div className="form-container">
        <h2>Update Match</h2>
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
              onChange={(e) => setResultHome(parseInt(e.target.value))}
              required
            />
            <span> : </span>
            <input
              type="number"
              id="result-away"
              name="result-away"
              min="0"
              value={resultAway}
              onChange={(e) => setResultAway(parseInt(e.target.value))}
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
          <button type="submit">Update Match</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMatch;
