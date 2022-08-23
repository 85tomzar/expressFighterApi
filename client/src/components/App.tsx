import React, { useState, useEffect } from "react";
import { Container, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import FighterCard from "./FighterCard";
import Fighter from "../models/FighterModel";
import FighterModal from "./FighterModal";
import CreateFighterModal from "./CreateFighterModal";

function App() {
  const [fighters, setFighters] = useState([] as Fighter[]);
  const [selectedFighter, setSelectedFighter] = useState({} as Fighter);
  const [fighterModalOpen, setFighterModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/fighters")
      .then((response) => response.json())
      .then((data) => {
        setFighters(data);
      });
  }, []);

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
      <header>
        <div className="header-content">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/92/UFC_Logo.svg"
            alt="UFC logo"
            className="logo"
          />
          <div
            className="d-flex align-items-center gap-1"
            onClick={() => setCreateModalOpen(true)}
          >
            <i className="fa-solid fa-plus"></i> <span>Add fighter</span>
          </div>
        </div>
      </header>
      <main>
        <Container className="d-flex justify-content-center">
          <div className="fighter-container">{fighterCards}</div>
        </Container>
        <Modal
          size="lg"
          show={fighterModalOpen}
          onHide={() => setFighterModalOpen(false)}
          onEscapeKeyDown={() => setFighterModalOpen(false)}
        >
          <FighterModal
            fighter={selectedFighter}
            onHide={() => setFighterModalOpen(false)}
          />
        </Modal>
        <Modal
          size="lg"
          show={createModalOpen}
          onHide={() => setCreateModalOpen(false)}
          onEscapeKeyDown={() => setCreateModalOpen(false)}
        >
          <CreateFighterModal />
        </Modal>
      </main>
    </>
  );
}

export default App;
