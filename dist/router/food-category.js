"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodCategoryRouter = void 0;
const express_1 = require("express");
const FoodCategoryModel_1 = require("../models/FoodCategoryModel");
exports.foodCategoryRouter = (0, express_1.Router)();
exports.foodCategoryRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodCategories = yield FoodCategoryModel_1.FoodCategoryModel.find();
    res.json(foodCategories);
}));
exports.foodCategoryRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newItem = yield FoodCategoryModel_1.FoodCategoryModel.create({
        categoryName: req.body.categoryName,
    });
    res.send({
        message: "New category created",
        newItem,
    });
}));
exports.foodCategoryRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryJson = yield FoodCategoryModel_1.FoodCategoryModel.findByIdAndDelete(req.params.id);
    res.send("deleted lol");
    res.json(categoryJson);
}));
exports.foodCategoryRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateId = req.params.id.trim();
    const updated = yield FoodCategoryModel_1.FoodCategoryModel.findByIdAndUpdate(updateId, { categoryName: req.body.categoryName }, { new: true });
    res.json(updated);
}));
