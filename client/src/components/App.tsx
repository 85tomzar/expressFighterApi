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
      const newFighters = [newFighter, ...prevFighters];
      return newFighters;
    });
  };

  const handleDeleteFighter = (fighterToDelete: Fighter) => {
    setFighters((prevFighters) => {
      const fighterIndex = prevFighters.findIndex(
        (f) => f.id === fighterToDelete.id
      );
      prevFighters.splice(fighterIndex, 1);
      return prevFighters;
    });
  };

  const handleChangeFighter = (fighterToUpdate: Fighter) => {
    setFighters((prevFighters) => {
      const fighterIndex = prevFighters.findIndex(
        (f) => f.id === fighterToUpdate.id
      );
      prevFighters[fighterIndex] = fighterToUpdate;
      return prevFighters;
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
