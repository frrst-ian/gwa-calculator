import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
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
      </div>
    </Router>
  );
}

export default App;
