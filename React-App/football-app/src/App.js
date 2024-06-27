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
import NotFound from "./pages/NotFound";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/player/:playerId" element={<Player />} />
          <Route path="/player/create" element={<CreatePlayer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
