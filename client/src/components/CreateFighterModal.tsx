import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import Fighter from "../models/FighterModel";
import "./css/fightermodal.css";
import FighterForm from "./FighterForm";

interface Props {
  onHide: () => void;
  handleNewFighter: (fighter: Fighter) => void;
}

export default function CreateFighterModal({
  onHide,
  handleNewFighter,
}: Props) {
  const handleSubmit = async (newFighter: Fighter) => {
    handleNewFighter(newFighter);
    console.log({ newFighter });
    //TODO - spinner and result messages
    try {
      let res = await fetch(`http://localhost:3000/api/fighters/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFighter),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        console.log("success!");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log("vafaaan" + err);
    }

    onHide();
  };

  return (
    <>
      <Modal.Header closeButton closeVariant="white"></Modal.Header>
      <Modal.Body>
        <FighterForm onSubmit={handleSubmit} btnTitle="Create" />
      </Modal.Body>
    </>
  );
}
