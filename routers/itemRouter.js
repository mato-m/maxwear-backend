const express = require("express");
const addItem = require("../controllers/item/addItem");
const addItemSize = require("../controllers/item/addItemSize");
const deleteItem = require("../controllers/item/deleteItem");
const deleteSize = require("../controllers/item/deleteSize");
const editItemBrand = require("../controllers/item/editItemBrand");
const editItemCategory = require("../controllers/item/editItemCategory");
const editItemColor = require("../controllers/item/editItemColor");
const editItemDescription = require("../controllers/item/editItemDescription");
const editItemDiscount = require("../controllers/item/editItemDiscount");
const editItemImage = require("../controllers/item/editItemImage");
const editItemName = require("../controllers/item/editItemName");
const editItemPrice = require("../controllers/item/editItemPrice");
const editItemQuantity = require("../controllers/item/editItemQuantity");
const getAllItems = require("../controllers/item/getAllItems");
const getDiscountedItems = require("../controllers/item/getDiscountedItems");
const getItemsBrand = require("../controllers/item/getItemsBrand");
const getItemsCategory = require("../controllers/item/getItemsCategory");
const getItemsColor = require("../controllers/item/getItemsColor");
const seeAllSizes = require("../controllers/item/seeAllSizes");
const itemRouter = express.Router();
itemRouter.post("/", addItem);
itemRouter.get("/", getAllItems);
itemRouter.get("/discounted", getDiscountedItems);
itemRouter.get("/brand/:brand_id", getItemsBrand);
itemRouter.get("/color/:color_id", getItemsColor);
itemRouter.get("/category/:category_id", getItemsCategory);
itemRouter.delete("/:item_id", deleteItem);
itemRouter.put("/price/:item_id", editItemPrice);
itemRouter.put("/name/:item_id", editItemName);
itemRouter.put("/description/:item_id", editItemDescription);
itemRouter.put("/image/:item_id", editItemImage);
itemRouter.put("/discount/:item_id", editItemDiscount);
itemRouter.put("/color/:item_id", editItemColor);
itemRouter.put("/category/:item_id", editItemCategory);
itemRouter.put("/brand/:item_id", editItemBrand);
itemRouter.put("/quantity/:item_id", editItemQuantity);
itemRouter.get("/sizes", seeAllSizes);
itemRouter.post("/sizes", addItemSize);
itemRouter.delete("/sizes/:itemsize_id", deleteSize);
module.exports = itemRouter;
