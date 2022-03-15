const { Router } = require("express");

const { commentController } = require("../controllers/comments.controller");

const router = Router();

router.post("/", commentController.addComment);
router.delete("/:id", commentController.deleteComment);
router.get("/", commentController.getComment);

module.exports = router;
