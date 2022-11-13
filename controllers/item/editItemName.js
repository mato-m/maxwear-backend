const connection = require("../../dbConfig");
const editItemName = async (req, res) => {
  try {
    await connection`update maxwear_schema.basicitem set item_name=${req.body.item_name} where item_id=${req.params.item_id}`;
    res.send({
      status: 0,
      message: "Successfully changed item name",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while changing item name",
    });
  }
};
module.exports = editItemName;
