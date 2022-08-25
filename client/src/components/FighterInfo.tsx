import React from "react";
import Fighter from "../models/FighterModel";

interface Props {
  fighter: Fighter;
}

export default function FighterInfo({ fighter }: Props) {
  return (
    <>
      <h2 className="first-name">{fighter.name.substring(0, fighter.name.indexOf(" "))}</h2>
      <h2 className="last-name">{fighter.name.substring(fighter.name.indexOf(" ") + 1)}</h2>
      {fighter.nickname !== "N/A" && <div className="text-muted nickname">{fighter.nickname}</div>}
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
    </>
  );
}
