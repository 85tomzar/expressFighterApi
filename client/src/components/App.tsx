import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import Fighter from "../models/FighterModel";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [fighters, setFighters] = useState([] as Fighter[]);

  useEffect(() => {
    fetch("http://localhost:3000/api/fighters")
      .then((response) => response.json())
      .then((data) => {
        setFighters(data);
      });
  }, []);

  const handleNewFighter = (newFighter: Fighter) => {
    setFighters((prevFighters) => {
      const newFighters = [...prevFighters, newFighter];
      return newFighters;
    });
  };

  const handleDeleteFighter = (fighterToDelete: Fighter) => {
    setFighters((prevFighters) => {
      const fighters = [...prevFighters];
      const fighterIndex = fighters.findIndex(
        (f) => f.id === fighterToDelete.id
      );
      fighters.splice(fighterIndex, 1);
      return fighters;
    });
  };

  const handleChangeFighter = (fighterToUpdate: Fighter) => {
    setFighters((prevFighters) => {
      const modifiedFighters = [...prevFighters];
      const fighterIndex = modifiedFighters.findIndex(
        (f) => f.id === fighterToUpdate.id
      );
      modifiedFighters[fighterIndex] = fighterToUpdate;
      return modifiedFighters;
    });
  };

  return (
    <>
      <Header handleNewFighter={handleNewFighter} />
      <Main
        fighters={fighters}
        handleDeleteFighter={handleDeleteFighter}
        handleChangeFighter={handleChangeFighter}
      />
    </>
  );
}

export default App;
