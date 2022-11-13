const connection = require("../../dbConfig");
const editItemPrice = async (req, res) => {
  try {
    await connection`update maxwear_schema.basicitem set item_price=${req.body.item_price} where item_id=${req.params.item_id}`;
    res.send({
      status: 0,
      message: "Successfully changed item price",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while changing item price",
    });
  }
};
module.exports = editItemPrice;
