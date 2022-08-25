import { NextFunction, Request, Response } from "express";
import {
  addFighter,
  deleteFighterById,
  getFighterById,
  getFighters,
  updateFighterById,
} from "./fighterdata.handler";

export const getAllFighters = (req: Request, res: Response) => {
  res.status(200).json(getFighters());
};

export const getFighter = (req: Request, res: Response, next: NextFunction) => {
  const fighter = getFighterById(req.params.id);
  fighter
    ? res.status(200).json(fighter)
    : res.status(404).json(`no fighter with id ${req.params.id}`);
};

export const createFighter = (req: Request, res: Response) => {
  addFighter(req.body);
  res.status(201).json(req.body);
};

export const updateFighter = (req: Request, res: Response) => {
  const fighter = getFighterById(req.params.id);
  if (fighter) {
    updateFighterById(req.body);
    res.status(200).json(req.body);
  } else {
    res.status(404).json(`no fighter with id ${req.params.id}`);
  }
};

export const deleteFighter = (req: Request, res: Response) => {
  const fighter = getFighterById(req.params.id);
  if (fighter) {
    deleteFighterById(req.params.id);
    res.status(200).json("fighter deleted");
  } else {
    res.status(404).json(`no fighter with id ${req.params.id}`);
  }
};
