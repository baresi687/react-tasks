import { NavLink } from "react-router-dom";

export default function NavBar() {
  let activeStyle = "underline";

  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Home
      </NavLink>
      <NavLink to="/signin" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Sign In
      </NavLink>
    </nav>
  );
}
