const Comment = require("../models/Comment.model");

module.exports.commentController = {
  addComment: async (req, res) => {
      try {
        await Comment.create({
            text: req.body.text,
            user: req.params.user,
            news: req.params.news
          });
          res.json("Комментарий добавлен");
      } catch (error) {
          console.log(error.message)
      }
    
  },
  deleteComment: async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.json("Комментарий удален");
  },
  getComment: async (req, res) => {
    const get = await Comment.find({ news: req.params.id});
    res.json(get);
  },
};