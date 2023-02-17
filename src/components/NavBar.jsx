import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeClass = ({ isActive }) => (isActive ? "underline" : undefined);

  return (
    <nav>
      <NavLink to="/" className={activeClass}>
        Home
      </NavLink>
      <NavLink to="/signin" className={activeClass}>
        Sign In
      </NavLink>
    </nav>
  );
}
