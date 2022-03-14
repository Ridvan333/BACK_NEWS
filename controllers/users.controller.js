const User = require("../models/User.model")


module.exports.userController = {
    addUser: async (req, res) => {
      try {
        await User.create({
          name: req.body.name,
        });
        res.json("Пользователь создан");
      } catch (err) {
        res.json({ error: "Ошибка при создании пользователя" });
      }
    },
    
  };