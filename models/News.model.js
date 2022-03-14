const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  text: String,
  category: {
    ref: "Category",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
