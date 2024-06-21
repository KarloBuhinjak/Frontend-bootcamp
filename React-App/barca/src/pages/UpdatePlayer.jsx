import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/update.css";

const UpdatePlayer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [position, setPosition] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const players = JSON.parse(localStorage.getItem("players"));
    const playerToUpdate = players.find((player) => player.id === parseInt(id));

    if (playerToUpdate) {
      setFirstName(playerToUpdate.firstName);
      setLastName(playerToUpdate.lastName);
      setPhotoLink(playerToUpdate.photoLink);
      setPosition(playerToUpdate.position);
    } else {
      alert("Player not found!");
      navigate("/players");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPlayer = {
      id: parseInt(id),
      firstName,
      lastName,
      photoLink,
      position,
    };

    let players = JSON.parse(localStorage.getItem("players"));
    players = players.map((player) =>
      player.id === updatedPlayer.id ? updatedPlayer : player
    );
    localStorage.setItem("players", JSON.stringify(players));
    alert("Player updated successfully.");
    navigate("/players");
  };

  return (
    <div className="content">
      <div className="form-container">
        <h2>Update Player</h2>
        <form id="update-form" onSubmit={handleSubmit}>
          <input type="hidden" id="update-id" name="update-id" value={id} />
          <label htmlFor="update-first-name">First Name:</label>
          <input
            type="text"
            id="update-first-name"
            name="update-first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <br />
          <label htmlFor="update-last-name">Last Name:</label>
          <input
            type="text"
            id="update-last-name"
            name="update-last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <br />
          <label htmlFor="update-photo-link">Photo Link:</label>
          <input
            type="url"
            id="update-photo-link"
            name="update-photo-link"
            value={photoLink}
            onChange={(e) => setPhotoLink(e.target.value)}
            required
          />
          <br />
          <label htmlFor="update-position">Position:</label>
          <select
            id="update-position"
            name="update-position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          >
            <option value="FW">Forward</option>
            <option value="MID">Midfielder</option>
            <option value="DF">Defender</option>
            <option value="GK">Goalkeeper</option>
          </select>
          <br />
          <button type="submit">Update Player</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlayer;
