import { useState } from "react";
import "./App.css";
import ProfileName from "./components/ProfileName.jsx";
import DefaultProfilePic from "./components/DefaultProfilePic.jsx";
function App() {
  return (
    <>
      <ProfileName name="Hreinn" />
      <DefaultProfilePic altText="Image is here" />
    </>
  );
}

export default App;
