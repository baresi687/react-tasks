import { useState } from "react";
import "./Task-2.css";

export default function Task2() {
  const [name, setName] = useState("Ted");
  const [open, toggleOpen] = useState(false);

  function handleClick() {
    name === "Ted" ? setName("Steve") : setName("Ted");
  }

  function toggleMenu() {
    toggleOpen(!open);
  }

  return (
    <>
      <section id="task-2">
        <h2>Task 2</h2>
        <div>
          <div>Button example</div>
          <button onClick={handleClick}>{name}</button>
        </div>
        <div>
          <div>Menu</div>
          <button onClick={toggleMenu}>{open ? "Close" : "Open"}</button>
          <div className={`menu ${open ? "" : "closed"}`}>
            <nav>
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
