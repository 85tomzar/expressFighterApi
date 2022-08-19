import express from "express";
import fighterRouter from "./resources/fighters/fighter.router";

const app = express();

app.use(express.json());

app.use("/api/fighters/", fighterRouter);

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
