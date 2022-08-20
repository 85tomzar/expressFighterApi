import { NextFunction, Request, Response } from "express";
import { nanoid } from "nanoid";
import { fighterSchema } from "./resources/fighters/fighter.model";

export const generateId = (req: Request, res: Response, next: NextFunction) => {
  req.body = { id: nanoid(), ...req.body };
  next();
};

export const validateFighterBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = fighterSchema.validate(req.body);
  if (result.error) {
    res.status(400).json(result.error.message);
  } else {
    next();
  }
  //   result.error ? res.status(400).json(result.error.message) : next();
};