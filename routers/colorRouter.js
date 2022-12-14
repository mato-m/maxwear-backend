const express = require("express");
const addColor = require("../controllers/color/addColor");
const deleteColor = require("../controllers/color/deleteColor");
const editColorHex = require("../controllers/color/editColorHex");
const editColorName = require("../controllers/color/editColorName");
const getAllColors = require("../controllers/color/getAllColors");
const colorRouter = express.Router();
colorRouter.route("/").get(getAllColors).post(addColor);
colorRouter.delete("/:color_id", deleteColor);
colorRouter.put("/:color_id/name", editColorName);
colorRouter.put("/:color_id/hex", editColorHex);
module.exports = colorRouter;
