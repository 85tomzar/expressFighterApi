import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import Fighter from "../models/FighterModel";
import "./css/fightermodal.css";

interface Props {
  fighter: Fighter;
  onHide: () => void;
}

export default function FighterModal(props: Props) {
  const [editMode, setEditMode] = useState(false);
  const [fighter, setFighter] = useState(props.fighter);

  const deleteFighter = async (e: any) => {
    e.preventDefault();

    try {
      let res = await fetch(
        `http://localhost:3000/api/fighters/${props.fighter.id}`,
        {
          method: "DELETE",
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("success!");
        props.onHide();
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(fighter);

    try {
      let res = await fetch(
        `http://localhost:3000/api/fighters/${fighter.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fighter),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("success!");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: any) => {
    setFighter({ ...fighter, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal.Header closeButton closeVariant="white">
        <i
          className="fa-solid fa-trash-can"
          data-content="Delete fighter"
          onClick={deleteFighter}
        ></i>
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
          // className={editMode ? "small-img" : ""}
        />

        <div
          className={editMode ? "edit-container" : "edit-container hide-edit"}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={fighter.name}
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nickname</Form.Label>
              <Form.Control
                type="text"
                placeholder={fighter.nickname}
                name="nickname"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Record</Form.Label>
              <Form.Control
                type="text"
                placeholder={fighter.record}
                name="record"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Division</Form.Label>
              <Form.Control
                type="text"
                placeholder={fighter.division}
                name="division"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder={fighter.age}
                name="age"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="text"
                placeholder={fighter.height}
                name="height"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="text"
                placeholder={fighter.weight}
                name="weight"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Reach</Form.Label>
              <Form.Control
                type="text"
                placeholder={fighter.reach}
                name="reach"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save changes
            </Button>
          </Form>
        </div>

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
