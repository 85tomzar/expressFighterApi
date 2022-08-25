import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Fighter from "../models/FighterModel";
import CreateFighterModal from "./CreateFighterModal";
import "./css/Header.css";

interface Props {
  handleNewFighter: (fighter: Fighter) => void;
}

export default function Header({ handleNewFighter }: Props) {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  return (
    <header>
      <div className="header-content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/UFC_Logo.svg" alt="UFC logo" className="logo" />
        <div className="d-flex align-items-center gap-1" onClick={() => setCreateModalOpen(true)}>
          <i className="fa-solid fa-plus"></i> <span>Add fighter</span>
        </div>
      </div>
      <Modal size="lg" show={createModalOpen} onHide={() => setCreateModalOpen(false)} onEscapeKeyDown={() => setCreateModalOpen(false)}>
        <CreateFighterModal onHide={() => setCreateModalOpen(false)} handleNewFighter={handleNewFighter} />
      </Modal>
    </header>
  );
}
