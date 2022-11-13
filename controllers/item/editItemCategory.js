const connection = require("../../dbConfig");
const editItemCategory = async (req, res) => {
  try {
    await connection`update maxwear_schema.basicitem set category_id=${req.body.category_id} where item_id=${req.params.item_id}`;
    res.send({
      status: 0,
      message: "Successfully changed item category",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while changing item category",
    });
  }
};
module.exports = editItemCategory;
