const connection = require("../../dbConfig");
const getAllBrands = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.brand order by brand_name`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting all brands" });
  }
};
module.exports = getAllBrands;
