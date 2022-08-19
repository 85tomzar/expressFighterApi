import fs from "fs";
import { Fighter } from "./fighter.model";

export const getFighterById = (id: string) => {
  const fighterData = fs.readFileSync(
    "./src/resources/fighters/fighterdata.json",
    "utf8"
  );
  const fighters: Fighter[] = JSON.parse(fighterData);
  return fighters.find((fighter) => fighter.id === id);
};
