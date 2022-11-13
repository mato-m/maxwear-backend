const express = require("express");
const deleteBrand = require("../controllers/brand/deleteBrand");
const editBrandName = require("../controllers/brand/editBrandName");
const getAllBrands = require("../controllers/brand/getAllBrands");
const brandRouter = express.Router();
brandRouter.get("/", getAllBrands);
brandRouter.delete("/:brand_id", deleteBrand);
brandRouter.put("/name/:brand_id", editBrandName);
module.exports = brandRouter;
