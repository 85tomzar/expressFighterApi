import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import FighterCard from "./FighterCard";
import Fighter from "../models/FighterModel";

function App() {
  const [fighters, setFighters] = useState([]);
  const [selectedFighter, setSelectedFighter] = useState({} as Fighter);

  useEffect(() => {
    fetch("http://localhost:3000/api/fighters")
      .then((response) => response.json())
      .then((data) => {
        setFighters(data);
      });
  }, []);

  const handleClick = (fighter: Fighter): void => {
    setSelectedFighter(fighter);
  };

  const fighterCards = fighters.map((fighter: Fighter) => {
    return (
      <FighterCard key={fighter.id} onclick={handleClick} fighter={fighter} />
    );
  });

  return (
    <>
      <header>
        <div className="header-content">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/92/UFC_Logo.svg"
            alt="UFC logo"
            className="logo"
          />
          <div>
            <i className="fa-solid fa-plus"></i> Add fighter
          </div>
        </div>
      </header>
      <main>
        <Container className="d-flex justify-content-center">
          <div className="fighter-container">{fighterCards}</div>
        </Container>
      </main>
    </>
  );
}

export default App;
