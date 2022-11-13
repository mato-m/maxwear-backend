const connection = require("../../dbConfig");
const editItemColor = async (req, res) => {
  try {
    await connection`update maxwear_schema.basicitem set color_id=${req.body.color_id} where item_id=${req.params.item_id}`;
    res.send({
      status: 0,
      message: "Successfully changed item color",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while changing item color",
    });
  }
};
module.exports = editItemColor;
