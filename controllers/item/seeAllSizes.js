const connection = require("../../dbConfig");
const seeAllSizes = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.itemsize order by item_size`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting all sizes" });
  }
};
module.exports = seeAllSizes;
