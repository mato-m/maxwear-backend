const connection = require("../../dbConfig");
const seeCartItemsUser = async (req, res) => {
  try {
    const activeCart =
      await connection`select * from maxwear_schema.cart where user_id=${req.body.user_id} and cart_status=0`;
    currentCart = activeCart[0].cart_id;
    const result =
      await connection`select * from maxwear_schema.cartitem inner join maxwear_schema.itemsize on cartitem.itemsize_id=itemsize.itemsize_id inner join maxwear_schema.basicitem on itemsize.item_id=basicitem.item_id where cart_id=${currentCart}`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting all items in a cart" });
  }
};
module.exports = seeCartItemsUser;
