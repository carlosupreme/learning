import "reflect-metadata";
import bootstrap from "./bootstrap";
import express from "express";
import "./UserController";
import "./GetUserQueryHandler";
import { InversifyExpressServer } from "inversify-express-utils";

const container = bootstrap();

const server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
});
const app = server.build();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
