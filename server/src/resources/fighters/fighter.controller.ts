import { Request, Response } from "express";
import { Fighter } from "./fighter.model";
import { getFighterById } from "./fighterdata.handler";

export const getAllFighters = (req: Request, res: Response) => {
  res.status(200).json("this is all fighters");
};

export const getFighter = (req: Request, res: Response) => {
  const fighter = getFighterById(req.params.id);
  res.status(200).json(fighter);
};

export const createFighter = (req: Request, res: Response) => {
  res.status(200).json("fighter created");
};

export const updateFighter = (req: Request, res: Response) => {
  res.status(200).json("fighter updated");
};

export const deleteFighter = (req: Request, res: Response) => {
  res.status(200).json("fighter deleted");
};
