import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import Fighter from "../models/FighterModel";
import "./css/fightermodal.css";

export default function CreateFighterModal() {
  const [fighter, setFighter] = useState({} as Fighter);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFighter({ ...fighter, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    //TODO - spinner and result messages
    try {
      let res = await fetch(`http://localhost:3000/api/fighters/`, {
        method: "POST",
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
  };

  return (
    <>
      <Modal.Header closeButton closeVariant="white"></Modal.Header>
      <Modal.Body>
        <Form style={{ width: "50%" }} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              type="text"
              name="nickname"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Record</Form.Label>
            <Form.Control
              type="text"
              name="record"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Division</Form.Label>
            <Form.Control
              type="text"
              name="division"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              name="age"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="text"
              name="height"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="text"
              name="weight"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Reach</Form.Label>
            <Form.Control
              type="text"
              name="reach"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="imgURL"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="secondary" type="submit">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
