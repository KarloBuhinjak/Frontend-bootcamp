import React from "react";
import { useState, useEffect } from "react";
import matches from "../style/matches.css";
import MatchesForm from "../components/Matches/MatchesForm";
import MatchesGrid from "../components/Matches/MatchesGrid";

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const storedMatches = JSON.parse(localStorage.getItem("matches")) || [];
    setMatches(storedMatches);
  }, []);

  const addMatch = (match) => {
    const updatedMatches = [...matches, match];
    setMatches(updatedMatches);
    console.log(updatedMatches);
    localStorage.setItem("matches", JSON.stringify(updatedMatches));
  };

  const deleteMatch = (id) => {
    const updatedMatches = matches.filter((match) => match.id !== id);
    setMatches(updatedMatches);
    localStorage.setItem("matches", JSON.stringify(updatedMatches));
  };

  return (
    <div className="content">
      <MatchesForm addMatch={addMatch} />

      <div class="matches-list">
        <h2>Matches List</h2>
        <MatchesGrid matches={matches} deleteMatch={deleteMatch} />
      </div>
    </div>
  );
};

export default Matches;
