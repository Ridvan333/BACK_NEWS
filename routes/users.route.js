const { Router } = require("express");
const { userController } = require("../controllers/users.controller");

const router = Router();

router.post("add/user", userController.addUser);




