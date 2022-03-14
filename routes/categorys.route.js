const { Router } = require("express");

const { categoryController } = require("../controllers/categorys.controller");

const router = Router();

router.post("/category", categoryController.addCategory);
router.get("/category", categoryController.getCategory);

module.exports = router;
