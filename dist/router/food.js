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
exports.foodRouter = void 0;
const express_1 = require("express");
const FoodModel_1 = require("../models/FoodModel");
exports.foodRouter = (0, express_1.Router)();
exports.foodRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodNames = yield FoodModel_1.FoodModel.find();
    res.json(foodNames);
}));
exports.foodRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newItem = yield FoodModel_1.FoodModel.create({
        foodName: req.body.name,
        price: req.body.price,
        ingredients: req.body.ingredients,
        image: req.body.image,
        category: req.body.category,
    });
    res.send({
        message: "New category created",
        newItem,
    });
}));
exports.foodRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodJson = yield FoodModel_1.FoodModel.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
}));
exports.foodRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateId = req.params.id.trim();
    const updated = yield FoodModel_1.FoodModel.findByIdAndUpdate(updateId, {
        foodName: req.body.name,
        price: req.body.price,
        ingredients: req.body.ingredients,
        image: req.body.image,
        category: req.body.category,
    }, { new: true });
    res.json(updated);
}));
