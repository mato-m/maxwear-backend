const connection = require("../../dbConfig");
const editItemQuantity = async (req, res) => {
  try {
    await connection`update maxwear_schema.itemsize set item_quantity=${req.body.item_quantity} where item_id=${req.params.item_id}`;
    res.send({
      status: 0,
      message: "Successfully changed item quantity",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while changing item quantity",
    });
  }
};
module.exports = editItemQuantity;
