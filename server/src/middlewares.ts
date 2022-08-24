import { ResolveOptions } from "dns";
import { NextFunction, Request, Response } from "express";
import { nanoid } from "nanoid";
import { fighterSchema } from "./resources/fighters/fighter.model";

export const generateId = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.id === "") {
    req.body.id = nanoid();
  } else {
    req.body = { id: nanoid(), ...req.body };
  }
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
};

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.ip} requested ${req.method} on ${req.path}`);
  next();
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  res.status(500).json(err.message);
};

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json("Resource does not exist.");
};
