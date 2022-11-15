const connection = require("../../dbConfig");
const seeDeliveredUser = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.cart where cart_status = 3 and user_id=${req.params.user_id} order by order_date`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting pending orders" });
  }
};
module.exports = seeDeliveredUser;
