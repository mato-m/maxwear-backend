const connection = require("../../dbConfig");
const uuid = require("uuid");
const addItemSize = async (req, res) => {
  try {
    await connection`insert into maxwear_schema.itemsize (itemsize_id,item_id,item_size,item_quantity) values (${uuid.v4()},${
      req.body.item_id
    },${req.body.item_size},${req.body.item_quantity})`;
    res.send({ status: 0, message: "Successfully added a new item size" });
  } catch (error) {
    res.send({ status: 1, message: "Error while adding a new item size" });
  }
};
module.exports = addItemSize;
