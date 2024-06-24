import React from "react";
import standings from "../style/standings.css";
import StandingsTable from "../components/Standings/StandingsTable";

class Standings extends React.Component {
  render() {
    return (
      <div>
        <div class="standings-title">La Liga Standings 2023/24</div>
        <StandingsTable />
      </div>
    );
  }
}

export default Standings;
