const express = require("express");
const colorRouter = express.Router();
colorRouter.get("/", (req, res) => {
  res.send("hello world");
});
module.exports = colorRouter;
