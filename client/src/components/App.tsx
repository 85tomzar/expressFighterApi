import React, { useState, useEffect } from "react";
import { Container, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import FighterCard from "./FighterCard";
import Fighter from "../models/FighterModel";
import FighterModal from "./FighterModal";
import Header from "./Header";

function App() {
  const [fighters, setFighters] = useState([] as Fighter[]);
  const [selectedFighter, setSelectedFighter] = useState<Fighter>();
  const [fighterModalOpen, setFighterModalOpen] = useState(false);

  const handleOnHide = () => {
    setFighterModalOpen(false);
    setSelectedFighter(undefined);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/fighters")
      .then((response) => response.json())
      .then((data) => {
        setFighters(data);
      });
  }, [selectedFighter]);

  const handleClick = (fighter: Fighter): void => {
    setSelectedFighter(fighter);
    setFighterModalOpen(true);
  };

  const fighterCards = fighters.map((fighter: Fighter) => {
    return (
      <FighterCard key={fighter.id} onclick={handleClick} fighter={fighter} />
    );
  });

  return (
    <>
      <Header />
      <main>
        <Container className="d-flex justify-content-center">
          <div className="fighter-container">{fighterCards}</div>
        </Container>
        <Modal
          size="lg"
          show={fighterModalOpen}
          onHide={handleOnHide}
          onEscapeKeyDown={handleOnHide}
        >
          {selectedFighter && (
            <FighterModal
              fighterId={selectedFighter.id}
              onHide={handleOnHide}
            />
          )}
        </Modal>
      </main>
    </>
  );
}

export default App;
