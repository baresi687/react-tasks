import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function NavBar() {
  const [auth, setAuth] = useContext(AuthContext);
  const [, setIsUser] = useState([]);
  const activeClass = ({ isActive }) => (isActive ? "underline" : undefined);
  let navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setAuth(token);
    }
  }, [setAuth]);

  function signOut() {
    setAuth(null);
    setIsUser(null);
    localStorage.clear();
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
