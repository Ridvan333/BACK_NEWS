const News = require("../models/News.model");

module.exports.newsController = {
  addNews: async (req, res) => {
    try {
      await News.create({
        text: req.body.text,
        category: req.body.category,
      });
      res.json("Новость добалена");
    } catch (err) {
      console.log(`${err} Ошибка при добавлении новости`);
    }
  },
  deleteNews: async (req, res) => {
    try {
      await News.findByIdAndDelete(req.params.id);
      res.json("Новость удалена");
    } catch (err) {
      console.log(`${err} Ошибка при добавлении новости`);
    }
  },
  changeNews: async (req, res) => {
    try {
      await News.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        category: req.body.category,
      });
      res.json("Новость изменена");
    } catch (err) {
      console.log(`${err} Ошибка при добавлении новости`);
    }
  },
  getNewsById: async (req, res) => {
    try {
      const get = await News.findById(req.params.id).populate("category");
      res.json(`${get} : Новость выведена`);
    } catch (err) {
      console.log(`${err} Ошибка при выводе новости`);
    }
  },
  getAllNews: async (req, res) => {
    try {
      const get = await News.find().populate("category");
      
      res.json(`${get} : Новости выведены`);
    } catch (err) {
      console.log(`${err} Ошибка при выводе новостей`);
    }
  },
  getAllNewsByCategory: async (req, res) => {
    try {
      const get = await News.find({ category: req.params.id }).populate(
        "category"
      );
      res.json(`${get} : Новости по категории выведены`);
    } catch (err) {
      console.log(`${err} Ошибка при выводе новостей по категории`);
    }
  },
};
