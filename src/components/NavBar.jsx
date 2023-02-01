import { NavLink } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
    <header>
      <nav>
        <ul className="nav-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <div></div>
    </header>
  );
}
