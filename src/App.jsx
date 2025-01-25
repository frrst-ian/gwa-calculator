import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/GWACalculator";
import GWACalculator from "./components/GWACalculator";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<GWACalculator />} />
        </Routes>

        <GWACalculator />
      </div>
    </Router>
  );
}

export default App;
