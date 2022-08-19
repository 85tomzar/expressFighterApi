import fs from "fs";
import { Fighter } from "./fighter.model";

export const getFighters = () => {
  const fighterData = fs.readFileSync(
    "./src/resources/fighters/fighterdata.json"
  );
  const fighters: Fighter[] = JSON.parse(fighterData.toString());
  return fighters;
};

export const getFighterById = (id: string) => {
  const fighters = getFighters();
  return fighters.find((fighter) => fighter.id === id);
};

export const addFighter = (fighter: Fighter) => {
  const fighters = getFighters();
  fighters.push(fighter);
  fs.writeFileSync(
    "./src/resources/fighters/fighterdata.json",
    JSON.stringify(fighters)
  );
};

export const updateFighterById = (fighter: Fighter) => {
  const fighters = getFighters();
  const fighterIndex = fighters.findIndex((f) => f.id === fighter.id);
  fighters[fighterIndex] = fighter;
  fs.writeFileSync(
    "./src/resources/fighters/fighterdata.json",
    JSON.stringify(fighters)
  );
};

export const deleteFighterById = (id: string) => {
  const fighters = getFighters();
  const fighterIndex = fighters.findIndex((f) => f.id === id);
  fighters.splice(fighterIndex, 1);
  fs.writeFileSync(
    "./src/resources/fighters/fighterdata.json",
    JSON.stringify(fighters)
  );
};
