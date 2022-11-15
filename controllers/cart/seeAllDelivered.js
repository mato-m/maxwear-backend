const connection = require("../../dbConfig");
const seeAllDelivered = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.cart where cart_status=3 order by order_date`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting pending orders" });
  }
};
module.exports = seeAllDelivered;
