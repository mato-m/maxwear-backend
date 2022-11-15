const connection = require("../../dbConfig");
const editItemQuantity = async (req, res) => {
  try {
    await connection`select * from maxwear_schema.cart where user_id=${req.body.user_id} and cart_status=0`;
    currentCart = result[0].cart_id;
    await connection`update maxwear_schema.cartitem set cart_quantity=${req.body.cart_quantity} where cart_id=${currentCart} and itemsize_id=${req.body.itemsize_id}`;
    res.send({
      status: 0,
      message: "Successfully changed quantity",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while changing quantity",
    });
  }
};
module.exports = editItemQuantity;
