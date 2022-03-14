const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());


async function connected() {
    try {
        await mongoose.connected();
    
    console.log('Подключение к MongoDB прошло успешно');
    app.listen(port, () => {
        console.log('OK!');
    })    
    } catch(e) {
        console.log('Не удалось подключиться');
    }
}
connected();
