const connection = require("../../dbConfig");
const getItemsBrand = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.basicitem where brand_id=${req.params.brand_id} order by item_name`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting items" });
  }
};
module.exports = getItemsBrand;
