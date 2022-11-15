const connection = require("../../dbConfig");
const uuid = require("uuid");
const orderCart = async (req, res) => {
  try {
    await connection`select * from maxwear_schema.cart where user_id=${req.body.user_id} and cart_status=0`;
    currentCart = result[0].cart_id;
    await connection`update maxwear_schema.cart set cart_status=1, order_date= now() where cart_id=${currentCart}`;
    await connection`insert into maxwear_schema.cart (cart_id,user_id) values (${uuid.v4()},${
      req.body.user_id
    })`;
    res.send({
      status: 0,
      message: "Successfully ordered cart",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while ordering cart",
    });
  }
};
module.exports = orderCart;
