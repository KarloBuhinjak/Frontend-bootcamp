import React from "react";
import { useNavigate } from "react-router-dom";

const MatchesGrid = ({ matches, deleteMatch }) => {
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/update-match/${id}`);
  };

  return (
    <div className="matches-grid">
      {matches.map((match) => (
        <div key={match.id} className="match">
          <img src="images/barca_logo.png" alt="Barcelona" />
          <div className="match-info">
            <h3>FC Barcelona vs {match.opponent}</h3>
            <p>Date: {match.matchDate}</p>
            <p>
              Result: {match.resultHome} - {match.resultAway}
            </p>
            <p>Match Type: {match.matchType}</p>
            <button
              className="btn-update"
              onClick={() => handleUpdate(match.id)}
            >
              Update
            </button>
            <button
              className="btn-delete"
              onClick={() => deleteMatch(match.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchesGrid;
