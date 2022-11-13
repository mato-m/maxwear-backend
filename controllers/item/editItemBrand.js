const connection = require("../../dbConfig");
const editItemBrand = async (req, res) => {
  try {
    await connection`update maxwear_schema.basicitem set brand_id=${req.body.brand_id} where item_id=${req.params.item_id}`;
    res.send({
      status: 0,
      message: "Successfully changed item brand",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while changing item brand",
    });
  }
};
module.exports = editItemBrand;
