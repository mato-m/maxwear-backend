const express = require("express");
const deleteUser = require("../controllers/user/deleteUser");
const login = require("../controllers/user/login");
const register = require("../controllers/user/register");
const userRouter = express.Router();
userRouter.route("/register").post(register);
userRouter.route("/login").post(login);
userRouter.route("/:user_id").delete(deleteUser);
module.exports = userRouter;
