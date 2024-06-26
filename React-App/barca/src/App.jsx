import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Players from "./pages/Players";
import Standings from "./pages/Standings";
import Matches from "./pages/Matches";
import UpdatePlayer from "./pages/UpdatePlayer";
import UpdateMatch from "./pages/UpdateMatch";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/players" element={<Players />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/update-player/:id" element={<UpdatePlayer />} />
        <Route path="/update-match/:id" element={<UpdateMatch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
