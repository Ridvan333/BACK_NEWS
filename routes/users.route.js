const { Router } = require("express");
const { userController } = require("../controllers/users.controller");

const router = Router();

router.post("/", userController.addUser);


module.exports = router;

