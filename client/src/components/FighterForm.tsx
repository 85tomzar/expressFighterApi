import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Fighter from "../models/FighterModel";

interface Props {
  onSubmit: (fighter: Fighter) => void;
  btnTitle: string;
  fighter?: Fighter;
}

export default function FighterForm({ fighter, onSubmit, btnTitle }: Props) {
  const [editedFighter, setEditedFighter] = useState<Fighter>(
    fighter || {
      id: "",
      name: "",
      nickname: "",
      division: "",
      record: "",
      age: "",
      height: "",
      weight: "",
      reach: "",
      imgURL: "",
    }
  );

  const handleChange = <K extends keyof Fighter, V extends Fighter[K]>(
    key: K,
    value: V
  ) => {
    setEditedFighter({ ...editedFighter, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(editedFighter);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={editedFighter.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nickname</Form.Label>
        <Form.Control
          type="text"
          value={editedFighter.nickname}
          onChange={(e) => handleChange("nickname", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Record</Form.Label>
        <Form.Control
          type="text"
          value={editedFighter.record}
          onChange={(e) => handleChange("record", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Division</Form.Label>
        <Form.Control
          type="text"
          value={editedFighter.division}
          onChange={(e) => handleChange("division", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          value={editedFighter.age}
          onChange={(e) => handleChange("age", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Height</Form.Label>
        <Form.Control
          type="text"
          value={editedFighter.height}
          onChange={(e) => handleChange("height", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Weight</Form.Label>
        <Form.Control
          type="text"
          value={editedFighter.weight}
          onChange={(e) => handleChange("weight", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Reach</Form.Label>
        <Form.Control
          type="text"
          value={editedFighter.reach}
          onChange={(e) => handleChange("reach", e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          value={editedFighter.imgURL}
          onChange={(e) => handleChange("imgURL", e.target.value)}
        />
      </Form.Group>
      <Button
        variant="secondary"
        type="submit"
        className="mt-2 font-weight-bold"
      >
        {btnTitle}
      </Button>
    </Form>
  );
}
