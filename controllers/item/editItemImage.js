const connection = require("../../dbConfig");
const editItemImage = async (req, res) => {
  try {
    await connection`update maxwear_schema.basicitem set item_image=${req.body.item_image} where item_id=${req.params.item_id}`;
    res.send({
      status: 0,
      message: "Successfully changed item image",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while changing item image",
    });
  }
};
module.exports = editItemImage;
