import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Fighter from "../models/FighterModel";
import "./css/fightermodal.css";

interface Props {
  fighter: Fighter;
  onHide: () => void;
}

export default function FighterModal(props: Props) {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <Modal.Header closeButton closeVariant="white">
        <i className="fa-solid fa-trash-can" data-content="Delete fighter"></i>
        <i
          className="fa-solid fa-pen-to-square"
          data-content="Edit fighter"
          onClick={() => setEditMode((prev) => !prev)}
        ></i>
      </Modal.Header>
      <Modal.Body>
        <img
          src={props.fighter.imgURL}
          alt={props.fighter.name}
          className={editMode ? "small-img" : ""}
        />
        <div
          className={editMode ? "info-container hide-info" : "info-container"}
        >
          <h2 className="first-name">
            {props.fighter.name.substring(0, props.fighter.name.indexOf(" "))}
          </h2>
          <h2 className="last-name">
            {props.fighter.name.substring(props.fighter.name.indexOf(" ") + 1)}
          </h2>
          {props.fighter.nickname !== "N/A" && (
            <div className="text-muted nickname">{props.fighter.nickname}</div>
          )}
          <div className="division">{props.fighter.division}</div>
          <div className="record">
            <span>Record</span> <span>{props.fighter.record}</span>
          </div>
          <div className="age">
            <span>Age</span> <span>{props.fighter.age}</span>
          </div>
          <div className="height">
            <span>Height</span> <span>{props.fighter.height}</span>
          </div>
          <div className="weight">
            <span>Weight</span> <span>{props.fighter.weight}</span>
          </div>
          <div className="reach">
            <span>Reach</span> <span>{props.fighter.reach}</span>
          </div>
        </div>
      </Modal.Body>
    </>
  );
}
