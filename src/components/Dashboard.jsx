import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setAuth(token);
    } else {
      navigate("/signin", { replace: true });
    }
  }, [setAuth, navigate]);

  return <h1>Dashboard</h1>;
}
