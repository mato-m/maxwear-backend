const connection = require("../../dbConfig");
const editItemDescription = async (req, res) => {
  try {
    await connection`update maxwear_schema.basicitem set item_description=${req.body.item_description} where item_id=${req.params.item_id}`;
    res.send({
      status: 0,
      message: "Successfully changed item description",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while changing item description",
    });
  }
};
module.exports = editItemDescription;
