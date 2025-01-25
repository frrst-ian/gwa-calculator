import { Link } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>GWA Calculator</h1>
      <p>Calculate your General Weighted Average with ease!</p>
      <Link to="/calculator" className="get-started">Get Started</Link>
    </div>
  );
};

export default HomePage;
