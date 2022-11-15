const connection = require("../../dbConfig");
const seeCartItems = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.cartitem inner join maxwear_schema.itemsize on cartitem.itemsize_id=itemsize.itemsize_id inner join maxwear_schema.basicitem on itemsize.item_id=basicitem.item_id where cart_id=${req.params.cart_id}`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting all items in a cart" });
  }
};
module.exports = seeCartItems;
