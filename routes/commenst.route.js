const { Router } = require("express");

const { commentController } = require("../controllers/comments.controller");

const router = Router();

router.post("/news/:id/comment", commentController.addComment);
router.delete("/comment/:id", commentController.deleteComment);
router.get("/news/:id/comments", commentController.getComment);

module.exports = router;