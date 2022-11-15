const connection = require("../../dbConfig");
const seePendingUser = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.cart where (cart_status = 1 or cart_status = 2) and user_id=${req.params.userID} order by order_date`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting pending orders" });
  }
};
module.exports = seePendingUser;
