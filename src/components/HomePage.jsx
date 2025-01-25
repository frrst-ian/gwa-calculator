import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="home-container">
        <div className="text-container">
          <h1>GWA Calculator</h1>
          <p>Calculate your General Weighted Average with ease!</p>
        </div>
        <Link to="/calculator" className="get-started">
          <button className="btn-grad">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
