const connection = require("../../dbConfig");
const getAllItems = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.basicitem order by item_name`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting all items" });
  }
};
module.exports = getAllItems;
