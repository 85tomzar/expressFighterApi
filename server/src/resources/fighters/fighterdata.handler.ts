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
  save(fighters);
};

export const updateFighterById = (fighter: Fighter) => {
  const fighters = getFighters();
  const fighterIndex = fighters.findIndex((f) => f.id === fighter.id);
  fighters[fighterIndex] = fighter;
  save(fighters);
};

export const deleteFighterById = (id: string) => {
  const fighters = getFighters();
  const fighterIndex = fighters.findIndex((f) => f.id === id);
  fighters.splice(fighterIndex, 1);
  save(fighters);
};

const save = (fighters: Fighter[]) => {
  fs.writeFile(
    "./src/resources/fighters/fighterdata.json",
    JSON.stringify(fighters),
    (err) => {
      if (err) console.log(err);
    }
  );
};
