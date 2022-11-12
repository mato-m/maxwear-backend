const express = require("express");
const deleteBrand = require("../controllers/brand/deleteBrand");
const getAllBrands = require("../controllers/brand/getAllBrands");
const brandRouter = express.Router();
brandRouter.get("/", getAllBrands);
brandRouter.delete("/:brand_id", deleteBrand);
module.exports = brandRouter;
