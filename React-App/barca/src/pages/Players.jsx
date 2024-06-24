import React from "react";
import { useState, useEffect } from "react";
import players from "../style/players.css";
import PlayersForm from "../components/Players/PlayersForm";
import PlayersGrid from "../components/Players/PlayersGrid";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const storedPlayers = JSON.parse(localStorage.getItem("players")) || [];
    setPlayers(storedPlayers);
  }, []);

  const addPlayer = (player) => {
    const updatedPlayers = [...players, player];
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };

  const deletePlayer = (id) => {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };
  return (
    <div className="content">
      <PlayersForm addPlayer={addPlayer} />
      <div class="players-list">
        <h2>Players List</h2>
        <PlayersGrid players={players} deletePlayer={deletePlayer} />
      </div>
    </div>
  );
};

export default Players;
