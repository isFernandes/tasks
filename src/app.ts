require("dotenv").config();
import express from "express";
// import mongoose from 'mongoose';
import cors from "cors";
import { ConnectDatabase } from "./database/config/db";
import routers from "./routers";

const app = express();
app.use(cors());
app.use(express.json());

routers.map((route) => {
  app.use(route);
});

//connection db
new ConnectDatabase().conn();

export = app;
