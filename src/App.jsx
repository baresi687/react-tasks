import { useState } from "react";
import { sculptureList } from "./data.js";
import "./App.css";

export default function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
    setIsPrev(index + 1 > 0);
    setIsNext(index + 1 === sculptureList.length - 1);
  }

  function handlePreviousClick() {
    setIndex(index - 1);
    setIsPrev(index - 1 > 0);
    setIsNext(index - 1 === sculptureList.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <div className="app-container">
      <div className="buttons-container">
        <button onClick={handlePreviousClick} disabled={!isPrev}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={isNext}>
          Next
        </button>
      </div>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <div>
        <button onClick={handleMoreClick}>{showMore ? "Hide" : "Show"} details</button>
        {showMore && <p>{sculpture.description}</p>}
      </div>
      <div>
        <img src={sculpture.url} alt={sculpture.alt} />
      </div>
    </div>
  );
}
