import React from "react";
import { useNavigate } from "react-router-dom";

const PlayersGrid = ({ players, deletePlayer }) => {
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/update-player/${id}`);
  };

  return (
    <div className="players-grid">
      {players.map((player) => (
        <div className="player" key={player.id}>
          <img
            src={player.photoLink}
            alt={`${player.firstName} ${player.lastName}`}
          />
          <div className="player-info">
            <h3>
              {player.firstName} {player.lastName}
            </h3>
            <p>Position: {player.position}</p>
          </div>
          <div className="player-actions">
            <button
              className="btn-update"
              onClick={() => handleUpdate(player.id)}
            >
              Update
            </button>
            <button
              className="btn-delete"
              onClick={() => deletePlayer(player.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayersGrid;
