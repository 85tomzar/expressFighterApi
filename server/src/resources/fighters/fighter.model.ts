import Joi from "joi";

export interface Fighter {
  id: string;
  name: string;
  nickname: string;
  division: string;
  record: string;
  age: string;
  height: string;
  weight: string;
  reach: string;
  imgURL: string;
}

export const fighterSchema = Joi.object<Fighter, true>({
  id: Joi.string().required(),
  name: Joi.string().required(),
  nickname: Joi.string().required(),
  division: Joi.string().required(),
  record: Joi.string().required(),
  age: Joi.string().required(),
  height: Joi.string().required(),
  weight: Joi.string().required(),
  reach: Joi.string().required(),
  imgURL: Joi.string().required(),
});
