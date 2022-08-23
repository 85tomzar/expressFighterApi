import React from "react";
import { Card } from "react-bootstrap";
import Fighter from "../models/FighterModel";
import "./css/fightercard.css";

interface Props {
  fighter: Fighter;
  key: string;
  onclick: (arg: Fighter) => void;
}

export default function FighterCard(props: Props) {
  return (
    <Card
      border="border-0"
      style={{ width: "10rem", cursor: "pointer" }}
      onClick={(event) => props.onclick(props.fighter)}
    >
      <Card.Img
        variant="top"
        src={props.fighter.imgURL}
        className="thumbnail"
      />
      <Card.Body>
        <Card.Title>{props.fighter.name}</Card.Title>
        {props.fighter.nickname !== "N/A" ? (
          <Card.Subtitle className="mb-2 text-muted">
            {props.fighter.nickname}
          </Card.Subtitle>
        ) : null}
        <Card.Text>{props.fighter.record}</Card.Text>
      </Card.Body>
    </Card>
  );
}
