const connection = require("../../dbConfig");
const getDiscountedItems = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.basicitem where item_discount>0 order by item_time desc`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting items" });
  }
};
module.exports = getDiscountedItems;
