import express from "express";
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
  .post("/", createFighter)
  .put("/:id", updateFighter)
  .delete("/:id", deleteFighter);

export default fighterRouter;
