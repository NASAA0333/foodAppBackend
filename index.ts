import express from "express";
import { foodCategoryRouter } from "./router/food-category";
import { foodRouter } from "./router/food";
import { configDotenv } from "dotenv";
import { foodCard } from "./router/foodCard";

const cors = require("cors");
const mongoose = require("mongoose");

const PORT = 7000;
const app = express();

app.use(cors());
app.use(express.json());

configDotenv();
let cluster: any = null;
const connectMongoDb = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {}
};

connectMongoDb();

app.use("/food-category/", foodCategoryRouter);
app.use("/food/", foodRouter);
app.use("/foodCard/", foodCard);
