import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function NavBar() {
  const [auth, setAuth] = useContext(AuthContext);
  const activeClass = ({ isActive }) => (isActive ? "underline" : undefined);
  let navigate = useNavigate();

  function signOut() {
    setAuth(null);
    navigate("/signin", { replace: true });
  }

  return (
    <nav>
      <NavLink to="/" className={activeClass}>
        Home
      </NavLink>
      {auth ? (
        <>
          <NavLink to="/dashboard" className={activeClass}>
            Dashboard
          </NavLink>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <NavLink to="/signin" className={activeClass}>
          Sign In
        </NavLink>
      )}
    </nav>
  );
}
