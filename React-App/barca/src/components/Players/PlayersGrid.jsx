import React from "react";

const PlayersGrid = ({ players, deletePlayer }) => {
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
