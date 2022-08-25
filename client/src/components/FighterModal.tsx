import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Fighter from "../models/FighterModel";
import "./css/fightermodal.css";
import FighterForm from "./FighterForm";
import FighterInfo from "./FighterInfo";

interface Props {
  fighterId: string;
  onHide: () => void;
  handleDeleteFighter: (fighterToDelete: Fighter) => void;
  handleChangeFighter: (fighterToChange: Fighter) => void;
}

export default function FighterModal({ fighterId, onHide, handleDeleteFighter, handleChangeFighter }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [fighter, setFighter] = useState<Fighter>();

  useEffect(() => {
    fetch(`http://localhost:3000/api/fighters/${fighterId}`)
      .then((response) => response.json())
      .then((data) => {
        setFighter(data);
      });
  }, []);

  if (!fighter) return null;
  const deleteFighter = async (e: any) => {
    e.preventDefault();

    handleDeleteFighter(fighter);
    try {
      let res = await fetch(`http://localhost:3000/api/fighters/${fighter.id}`, {
        method: "DELETE",
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("success!");
        onHide();
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }

    onHide();
  };

  const handleSubmit = async (fighter: Fighter) => {
    setFighter(fighter);
    handleChangeFighter(fighter);
    try {
      let res = await fetch(`http://localhost:3000/api/fighters/${fighter.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fighter),
      });

      let resJson = await res.json();

      if (res.status === 200) {
        console.log("success!");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }

    setEditMode(false);
  };

  return (
    <>
      <Modal.Header closeButton closeVariant="white">
        <i className="fa-solid fa-trash-can" data-content="Delete fighter" onClick={deleteFighter}></i>
        <i className="fa-solid fa-pen-to-square" data-content="Edit fighter" onClick={() => setEditMode((prev) => !prev)}></i>
      </Modal.Header>
      <Modal.Body>
        <div
          className="img-container"
          style={{
            background: `url(${fighter.imgURL})`,
            backgroundPosition: "center center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img src={fighter.imgURL} alt={fighter.name} /> */}
        </div>
        <div className={editMode ? "edit-container" : "edit-container hide-edit"}>
          <FighterForm onSubmit={handleSubmit} btnTitle="Update" fighter={fighter} />
        </div>

        <div className={editMode ? "info-container hide-info" : "info-container"}>
          <FighterInfo fighter={fighter} />
        </div>
      </Modal.Body>
    </>
  );
}
