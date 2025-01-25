import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="wrapper">
        <h1>GWA Calculator</h1>
        <p className="brand-line">
          Calculate your General Weighted Average with ease!
        </p>
        <button onClick={() => navigate("/calculator")}>Get Started</button>
      </div>
    </div>
  );
};

export default HomePage;
