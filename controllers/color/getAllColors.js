const connection = require("../../dbConfig");
const getAllColors = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.color order by color_name`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting all colors" });
  }
};
module.exports = getAllColors;
