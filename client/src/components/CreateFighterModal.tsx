import React, { useState } from "react";
import { Modal, Toast } from "react-bootstrap";
import Fighter from "../models/FighterModel";
import "./css/fightermodal.css";
import FighterForm from "./FighterForm";

interface Props {
  onHide: () => void;
  handleNewFighter: (fighter: Fighter) => void;
}

export default function CreateFighterModal({ onHide, handleNewFighter }: Props) {
  const [showToast, setShowToast] = useState(false);
  const [toastStatus, setToastStatus] = useState("success" || "danger");

  const handleSubmit = async (newFighter: Fighter) => {
    console.log({ newFighter });

    try {
      let res = await fetch(`http://localhost:3000/api/fighters/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFighter),
      });

      let resJson = await res.json();

      if (res.status === 201) {
        console.log("success!");
        setShowToast(true);
        setToastStatus("success");
        handleNewFighter(resJson);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    // onHide();
  };

  return (
    <>
      <Toast onClose={() => setShowToast(false)} show={showToast} bg={toastStatus}>
        <Toast.Header>{toastStatus}!</Toast.Header>
        <Toast.Body>this is a toast</Toast.Body>
      </Toast>
      <Modal.Header closeButton closeVariant="white">
        Create new fighter
      </Modal.Header>
      <Modal.Body>
        <div style={{ width: "100%", padding: "1rem" }}>
          <FighterForm onSubmit={handleSubmit} btnTitle="Create" />
        </div>
      </Modal.Body>
    </>
  );
}
