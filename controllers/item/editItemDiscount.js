const connection = require("../../dbConfig");
const editItemDiscount = async (req, res) => {
  try {
    await connection`update maxwear_schema.basicitem set item_discount=${req.body.item_discount} where item_id=${req.params.item_id}`;
    res.send({
      status: 0,
      message: "Successfully changed item discount",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while changing item discount",
    });
  }
};
module.exports = editItemDiscount;
