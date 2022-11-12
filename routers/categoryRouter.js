const express = require("express");
const addCategory = require("../controllers/category/addCategory");
const deleteCategory = require("../controllers/category/deleteCategory");
const editCategory = require("../controllers/category/editCategory");
const getAllCategories = require("../controllers/category/getAllCategories");
const categoryRouter = express.Router();
categoryRouter.route("/").get(getAllCategories).post(addCategory);
categoryRouter.route("/:category_id").delete(deleteCategory).put(editCategory);
module.exports = categoryRouter;
