import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
