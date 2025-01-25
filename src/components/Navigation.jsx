import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link id="home-txt" to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
