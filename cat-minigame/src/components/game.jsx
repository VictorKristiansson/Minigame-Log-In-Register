import React from "react";
import { useEffect , useState } from "react";
import "./game.css";

const Game = () => {
  const [hasFetched, setHasFetched] = useState("");
  const  [catFact, setCatFact] = useState({});

  const fetchData = async () => {
    try {
      const respone = await fetch(
        "https://catfact.ninja/fact"
      );

      const data = await respone.json();
      setCatFact(data);    
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const generateCatFact = () => {
    fetchData();
  }

  return (
    <div className="outer-container">
      <div className="cat-fact-container">
        <button onClick={generateCatFact}>Generate Cat Fact!</button>
        <p>Cat Fact: {catFact.fact}</p>
     </div>
    </div>
    
  );

};

export default Game;