const express = require('express');

const app = express();
app.use(express.json());

const dotenv = require('dotenv').config();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

require('./initDB')();

app.get('/', (req, res) => {
    res.send(`18. Прокат автомобілів Ви – керівник комерційної служби у фірмі, яка займається прокатом автомобілів.
        Ваше завдання – стеження за фінансовими показниками роботи пункту прокату.
        У Ваш автопарк входить певна кількість автомобілів різних марок, вартості та типів.
        Кожний автомобіль має свою вартість прокату. В пункт прокату звертаються клієнти. Усі
    клієнти проходять обов’язкову реєстрацію, при якій про них збирається стандартна
    інформація (прізвище, ім’я, по батькові, адреса, телефон).
    Кожний клієнт може звертатися в пункт прокату декілька разів. Всі звернення
    клієнтів фіксуються, при цьому по кожній угоді запам’ятовуються дата видачі та очікувана
    дата повернення. Вартість прокату автомобіля повинна залежати не тільки від самого
    автомобіля, але й від тривалості його прокату, а також від року випуску.
        Також необхідно ввести систему штрафів за повернення автомобіля в неналежному стані і
    систему знижок для постійних клієнтів.`);
})

const clientRouter = require("./routes/clientRouter.js");
const carRouter = require("./routes/carRouter.js");
const rentRouter = require("./routes/rentRouter.js");

app.use("/api/clients", clientRouter);
app.use("/api/cars", carRouter);
app.use("/api/rents", rentRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT + '...');
});

