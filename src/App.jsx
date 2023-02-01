import "./App.css";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Home />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
