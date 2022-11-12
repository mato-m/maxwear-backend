const express = require("express");
const deleteBrand = require("../controllers/brand/deleteBrand");
const getAllBrands = require("../controllers/brand/getAllBrands");
const brandRouter = express.Router();
brandRouter.route("/").get(getAllBrands);
brandRouter.route("/:brand_id").delete(deleteBrand);
module.exports = brandRouter;
