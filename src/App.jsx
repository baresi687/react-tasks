import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Outlet />
      </AuthProvider>
    </>
  );
}

export default App;
