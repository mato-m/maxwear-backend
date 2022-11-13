const connection = require("../../dbConfig");
const uuid = require("uuid");
const addItem = async (req, res) => {
  try {
    await connection`insert into maxwear_schema.basicitem (item_id,item_name,item_price,item_discount,item_description,item_image,brand_id,category_id,color_id) values (${uuid.v4()},${
      req.body.item_name
    },${req.body.item_price},${req.body.item_discount},${
      req.body.item_description
    },${req.body.item_image},${req.body.brand_id},${req.body.category_id},${
      req.body.color_id
    })`;
    res.send({ status: 0, message: "Successfully added a new item" });
  } catch (error) {
    res.send({ status: 1, message: "Error while adding a new item" });
  }
};
module.exports = addItem;
