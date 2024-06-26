import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PlayerDataService from "../services/PlayerService";

function Index() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    nameId: null,
    age: null,
    position: "",
    clubId: null,
    sortBy: "Name",
    sortOrder: "asc",
    pageNumber: 1,
    pageSize: 10,
  });
  const navigate = useNavigate();

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

  useEffect(() => {
    fetchPlayers();
  }, [filters]);

  const fetchPlayers = () => {
    PlayerDataService.getFilteredPlayers(filters)
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching players:", error);
      });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      PlayerDataService.searchByName(value)
        .then((response) => {
          setPlayers(response.data);
        })
        .catch((error) => {
          console.error("Error fetching players:", error);
        });
    } else {
      fetchPlayers();
    }
  };

  const handlePlayerClick = (playerId) => {
    navigate(`/player/${playerId}`);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Football Players</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={filters.age || ""}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="position">Position:</label>
          <select
            className="form-control"
            id="position"
            name="position"
            value={filters.position}
            onChange={handleFilterChange}
          >
            <option value="">Select a position</option>
            <option value="GK">GK</option>
            <option value="DF">DF</option>
            <option value="MID">MID</option>
            <option value="FW">FW</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="clubId">Club:</label>
          <select
            className="form-control"
            id="clubId"
            name="clubId"
            value={filters.clubId || ""}
            onChange={handleFilterChange}
          >
            <option value="">Select a club</option>
            {clubs.map((club) => (
              <option key={club.id} value={club.id}>
                {club.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {players.length === 0 ? (
        <p>No players for your search...</p>
      ) : (
        <div className="row">
          {players.map((player) => (
            <div
              key={player.playerId}
              className="col-12 mb-4"
              onClick={() => handlePlayerClick(player.playerId)}
            >
              <div
                className="card h-100"
                style={{ border: "1px solid #ddd", cursor: "pointer" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{player.name}</h5>
                  <p className="card-text">
                    <strong>Club:</strong> {player.clubName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Index;
