const express = require("express");
const register = require("../controllers/user/register");
const userRouter = express.Router();
userRouter.route("/").post(register);
module.exports = userRouter;
