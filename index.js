const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

app.use(require('./routes'));


async function connected() {
    try {
        await mongoose.connect("mongodb+srv://shamil:1234@cluster0.ch1gg.mongodb.net/NewsCommand");

        console.log('Подключение к MongoDB прошло успешно');
        app.listen(port, () => {
            console.log('OK!');
        })
    } catch (e) {
        console.log(e);
    }
}

connected();
