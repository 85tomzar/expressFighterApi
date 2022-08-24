import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import Fighter from "../models/FighterModel";
import "./css/fightermodal.css";

interface Props {
  fighterId: string;
  onHide: () => void;
}

export default function FighterModal(props: Props) {
  const [editMode, setEditMode] = useState(false);
  const [fighter, setFighter] = useState<Fighter>();
  const [fighterId, setFighterId] = useState(props.fighterId);

  useEffect(() => {
    fetch(`http://localhost:3000/api/fighters/${props.fighterId}`)
      .then((response) => response.json())
      .then((data) => {
        setFighter(data);
      });
  }, []);

  const deleteFighter = async (e: any) => {
    e.preventDefault();

    if (fighter) {
      try {
        let res = await fetch(
          `http://localhost:3000/api/fighters/${fighter.id}`,
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
    }
    props.onHide();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (fighter) {
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
    }

    setEditMode(false);
  };

  const handleChange = (e: any) => {
    if (fighter) {
      setFighter({ ...fighter, [e.target.name]: e.target.value });
    }
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
      {fighter && (
        <Modal.Body>
          <img
            src={fighter.imgURL}
            alt={fighter.name}
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
                  defaultValue={fighter.name}
                  placeholder={fighter.name}
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nickname</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={fighter.nickname}
                  placeholder={fighter.nickname}
                  name="nickname"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Record</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={fighter.record}
                  placeholder={fighter.record}
                  name="record"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Division</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={fighter.division}
                  placeholder={fighter.division}
                  name="division"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={fighter.age}
                  placeholder={fighter.age}
                  name="age"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Height</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={fighter.height}
                  placeholder={fighter.height}
                  name="height"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={fighter.weight}
                  placeholder={fighter.weight}
                  name="weight"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Reach</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={fighter.reach}
                  placeholder={fighter.reach}
                  name="reach"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={fighter.imgURL}
                  placeholder={fighter.imgURL}
                  name="imgURL"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                variant="secondary"
                type="submit"
                className="mt-2 font-weight-bold"
              >
                Update
              </Button>
            </Form>
          </div>

          <div
            className={editMode ? "info-container hide-info" : "info-container"}
          >
            <h2 className="first-name">
              {fighter.name.substring(0, fighter.name.indexOf(" "))}
            </h2>
            <h2 className="last-name">
              {fighter.name.substring(fighter.name.indexOf(" ") + 1)}
            </h2>
            {fighter.nickname !== "N/A" && (
              <div className="text-muted nickname">{fighter.nickname}</div>
            )}
            <div className="division">{fighter.division}</div>
            <div className="record">
              <span>Record</span> <span>{fighter.record}</span>
            </div>
            <div className="age">
              <span>Age</span> <span>{fighter.age}</span>
            </div>
            <div className="height">
              <span>Height</span> <span>{fighter.height}</span>
            </div>
            <div className="weight">
              <span>Weight</span> <span>{fighter.weight}</span>
            </div>
            <div className="reach">
              <span>Reach</span> <span>{fighter.reach}</span>
            </div>
          </div>
        </Modal.Body>
      )}
    </>
  );
}
