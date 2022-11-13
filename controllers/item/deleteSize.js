const connection = require("../../dbConfig");
const deleteSize = async (req, res) => {
  try {
    await connection`delete from maxwear_schema.itemsize where item_id=${req.params.item_id} and item_size=${req.body.item_size}`;
    res.send({ status: 0, message: "Successfully deleted an item size" });
  } catch (error) {
    res.send({ status: 1, message: "Error while deleting an item size" });
  }
};
module.exports = deleteSize;
