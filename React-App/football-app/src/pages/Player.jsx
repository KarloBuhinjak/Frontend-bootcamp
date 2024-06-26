import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import UpdatePlayer from "../components/UpdatePlayer";
import PlayerDataService from "../services/PlayerService";
import { UserContext } from "../context/UserContext";

const Player = () => {
  const { user } = useContext(UserContext);
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const fetchPlayer = async () => {
    try {
      const response = await PlayerDataService.get(playerId);
      setPlayer(response.data);
    } catch (error) {
      console.error("Error fetching player:", error);
    }
  };

  useEffect(() => {
    fetchPlayer();
  }, [playerId]);

  const handleUpdate = () => {
    setModalIsOpen(true);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure that you want to delete this player?"
    );
    if (confirmed) {
      try {
        await PlayerDataService.remove(playerId);
        navigate("/");
      } catch (error) {
        console.error("Error deleting player:", error);
      }
    }
  };
  console.log(player);

  const closeModal = () => {
    setModalIsOpen(false);
    fetchPlayer();
  };

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>Player Details</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">
            <strong>Age:</strong> {player.age}
          </p>
          <p className="card-text">
            <strong>Position:</strong> {player.position.toUpperCase()}
          </p>
          <p className="card-text">
            <strong>Club Name:</strong> {player.clubName}
          </p>
          {user.roles.includes("Admin") && (
            <button className="btn btn-primary mr-2" onClick={handleUpdate}>
              Update
            </button>
          )}
          {user.roles.includes("Admin") && (
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          )}
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <UpdatePlayer
          playerId={playerId}
          initialPlayerData={player}
          onClose={closeModal}
        />
      </Modal>
    </div>
  );
};

export default Player;
