import "./App.css";
import NavBar from "./components/NavBar.jsx";
import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
