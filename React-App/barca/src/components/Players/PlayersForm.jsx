import React from "react";
import { useState } from "react";

const PlayersForm = ({ addPlayer }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlayer = {
      id: Date.now(),
      firstName,
      lastName,
      photoLink,
      position,
    };

    addPlayer(newPlayer);

    setFirstName("");
    setLastName("");
    setPhotoLink("");
    setPosition("");
  };

  return (
    <div className="form-container">
      <h2>Add New Player</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="photo-link">Photo Link:</label>
        <input
          type="url"
          id="photo-link"
          name="photo-link"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
          required
        />
        <br />
        <label htmlFor="position">Position:</label>
        <select
          id="position"
          name="position"
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
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default PlayersForm;
