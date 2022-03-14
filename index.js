const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());


async function connected() {
    try {
        await mongoose.connected('mongodb+srv://mgls:12345@cluster0.od801.mongodb.net/test?authSource=admin&replicaSet=atlas-oy5gfc-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true');

        console.log('Подключение к MongoDB прошло успешно');
        app.listen(port, () => {
            console.log('OK!');
        })
    } catch (e) {
        console.log('Не удалось подключиться');
    }
}
connected();
