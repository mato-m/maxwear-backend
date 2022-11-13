const connection = require("../../dbConfig");
const getItemsColor = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.basicitem where color_id=${req.params.color_id} order by item_name`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting items" });
  }
};
module.exports = getItemsColor;
