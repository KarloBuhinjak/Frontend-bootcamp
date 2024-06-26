import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PlayerDataService from "../services/PlayerService";
import { UserContext } from "../context/UserContext";

const CreatePlayer = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [clubId, setClubId] = useState("");
  const [clubs, setClubs] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  {
    user.roles.includes("User") && navigate("/");
  }

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await PlayerDataService.getAllClubs();
        setClubs(response.data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };

    fetchClubs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPlayer = {
        name,
        age: parseInt(age),
        position,
        clubId: clubId ? clubId : null,
      };

      await PlayerDataService.create(newPlayer);
      navigate("/");
    } catch (error) {
      console.error("Error creating player:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Create New Player</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <select
            className="form-control"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
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
            value={clubId}
            onChange={(e) => setClubId(e.target.value)}
            required
          >
            <option value="">Select a club</option>
            {clubs.map((club) => (
              <option key={club.id} value={club.id}>
                {club.name} - {club.country}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Player
        </button>
      </form>
    </div>
  );
};

export default CreatePlayer;
