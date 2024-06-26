import React, { useState, useEffect } from "react";
import PlayerDataService from "../services/PlayerService";

const UpdatePlayer = ({ playerId, initialPlayerData, onClose }) => {
  const [updatedPlayerData, setUpdatedPlayerData] = useState({
    name: initialPlayerData.name,
    age: initialPlayerData.age.toString(),
    position: initialPlayerData.position,
    clubId: initialPlayerData.clubId,
  });
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await PlayerDataService.getAllClubs();
        setClubs(response.data);
      } catch (error) {
        console.log("Error fetching clubs: " + error.message);
      }
    };

    fetchClubs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPlayerData({
      ...updatedPlayerData,
      [name]: value,
    });
  };

  const handleClubChange = (e) => {
    setUpdatedPlayerData({
      ...updatedPlayerData,
      clubId: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      console.log(updatedPlayerData);
      await PlayerDataService.update(playerId, updatedPlayerData);
      onClose();
    } catch (error) {
      console.error("Error updating player:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Player</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={updatedPlayerData.name}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={updatedPlayerData.age}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Position:</label>
        <select
          className="form-control"
          name="position"
          value={updatedPlayerData.position}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a position</option>
          <option value="GK">Goalkeeper</option>
          <option value="DF">Defender</option>
          <option value="MID">Midfielder</option>
          <option value="FW">Forward</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="clubId">Club:</label>
        <select
          className="form-control"
          id="clubId"
          name="clubId"
          value={updatedPlayerData.clubId}
          onChange={handleClubChange}
          required
        >
          {clubs.map((club) => (
            <option key={club.id} value={club.id}>
              {club.name} - {club.country}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary mr-2" onClick={handleUpdate}>
        Update
      </button>
      <button className="btn btn-danger" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

export default UpdatePlayer;
