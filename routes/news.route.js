const { Router } = require("express");

const { newsController } = require("../controllers/news.controller");

const router = Router();

router.post("/", newsController.addNews);
router.delete("/:id", newsController.deleteNews);
router.patch("/:id", newsController.changeNews);
router.get("/", newsController.getAllNews);
router.get("/:id", newsController.getAllNewsByCategory);

module.exports = router;
