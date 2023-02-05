import { NavLink } from "react-router-dom";
import "../App.css";

function setNavItemActive({ isActive }) {
  return {
    textDecoration: isActive ? "underline" : "inherit",
  };
}

export default function NavBar() {
  return (
    <header>
      <nav>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" style={setNavItemActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={setNavItemActive}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={setNavItemActive}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
