import { React, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Player from "./pages/Player";
import CreatePlayer from "./pages/CreatePlayer";
import { UserProvider } from "./context/UserContext";
import { UserContext } from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/player/:playerId" element={<Player />} />

          <Route path="/player/create" element={<CreatePlayer />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
