import React from "react";

const MatchesGrid = ({ matches, deleteMatch }) => {
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
            <button className="btn-update" onClick={() => {}}>
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
