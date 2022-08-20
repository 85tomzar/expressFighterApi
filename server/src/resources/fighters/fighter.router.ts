import express from "express";
import { generateId, validateFighterBody } from "../../middlewares";
import {
  createFighter,
  deleteFighter,
  getAllFighters,
  getFighter,
  updateFighter,
} from "./fighter.controller";

const fighterRouter = express
  .Router()
  .get("/", getAllFighters)
  .get("/:id", getFighter)
  .post("/", generateId, validateFighterBody, createFighter)
  .put("/:id", validateFighterBody, updateFighter)
  .delete("/:id", deleteFighter);

export default fighterRouter;
