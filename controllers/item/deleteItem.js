const connection = require("../../dbConfig");
const deleteItem = async (req, res) => {
  try {
    await connection`delete from maxwear_schema.basicitem where item_id=${req.params.item_id}`;
    res.send({ status: 0, message: "Successfully deleted an item" });
  } catch (error) {
    res.send({ status: 1, message: "Error while deleting an item" });
  }
};
module.exports = deleteItem;
