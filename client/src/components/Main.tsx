import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import FighterModal from "./FighterModal";
import Fighter from "../models/FighterModel";
import FighterCard from "./FighterCard";

interface Props {
  fighters: Fighter[];
  handleDeleteFighter: (fighterToDelete: Fighter) => void;
  handleChangeFighter: (fighterToChange: Fighter) => void;
}

export default function Main({ fighters, handleDeleteFighter, handleChangeFighter }: Props) {
  const [selectedFighter, setSelectedFighter] = useState<Fighter>();
  const [fighterModalOpen, setFighterModalOpen] = useState(false);

  const handleClick = (fighter: Fighter): void => {
    setSelectedFighter(fighter);
    setFighterModalOpen(true);
  };

  const handleOnHide = () => {
    setFighterModalOpen(false);
    setSelectedFighter(undefined);
  };

  const fighterCards = fighters.map((fighter: Fighter) => {
    return <FighterCard key={fighter.id} onclick={handleClick} fighter={fighter} />;
  });

  return (
    <main>
      <Container className="d-flex justify-content-center">
        <div className="fighter-container">{fighterCards}</div>
      </Container>
      <Modal size="lg" show={fighterModalOpen} onHide={handleOnHide} onEscapeKeyDown={handleOnHide}>
        {selectedFighter && (
          <FighterModal
            fighterId={selectedFighter.id}
            onHide={handleOnHide}
            handleDeleteFighter={handleDeleteFighter}
            handleChangeFighter={handleChangeFighter}
          />
        )}
      </Modal>
    </main>
  );
}
