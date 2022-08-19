import { Request, Response } from "express";

export const getAllFighters = (req: Request, res: Response) => {
  res.status(200).json("this is all fighters");
};

export const getFighter = (req: Request, res: Response) => {
  res.status(200).json("this is a fighter");
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
