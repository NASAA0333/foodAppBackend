import { Request, Response, Router } from "express";
import { FoodCategoryModel } from "../models/FoodCategoryModel";

export const foodCard = Router();

foodCard.get("/", async (req: Request, res: Response) => {
  const foodCategories = await FoodCategoryModel.find();
  res.json(foodCategories);
});

foodCard.post("/", async (req: Request, res: Response) => {
  const newItem = await FoodCategoryModel.create({
    categoryName: req.body.categoryName,
  });
  res.send({
    message: "New category created",
    newItem,
  });
});

foodCard.delete("/:id", async (req: Request, res: Response) => {
  const foodCard = await FoodCategoryModel.findByIdAndDelete(req.params.id);
  res.send("deleted lol");
  res.json(foodCard);
});

foodCard.put("/:id", async (req: Request, res: Response) => {
  const updateId = req.params.id.trim();
  const updated = await FoodCategoryModel.findByIdAndUpdate(
    updateId,
    { categoryName: req.body.categoryName },
    { new: true }
  );
  res.json(updated);
});
