const express = require("express");
const app = express();
const mysql = require("mysql");
let cors = require("cors");
let config = require("../src/config/config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
});

connection.connect((err) => {
  if (!err) {
    console.log("Мы подключились к БД");
  }
});

app.get("/office/all", (request, response) => {
  connection.query("SELECT * FROM offices;", (err, data) => {
    if (err) {
      response.status(404).json("not found");
    }

    response.setHeader("Access-Control-Allow-Origin", "*");
    response.status(200).json(data);
  });
});

app.post("/office/add", (request, response) => {
  const { userName, company, inn, choise, userComment, tel } = request.body;
  console.log(request.body);
  console.log(`INSERT INTO officeForm (userName, company, inn, choise, userComment, tel)
    VALUES ('${userName}', '${company}', '${inn}', '${choise}', '${userComment}', '${tel}')`);

  connection.query(
    `INSERT INTO officeForm (userName, company, inn, choise, userComment, tel)
        VALUES ('${userName}', '${company}', '${inn}', '${choise}', '${userComment}', '${tel}');
        `,
    (err, data) => {
      if (err) {
        response.status(404).json("not found");
        return;
      }
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.status(200).json(data);
    }
  );
});
app.post(`/login`, (request, response) => {
  console.log(request.body);
  let login = request.body.login;
  let password = request.body.password;
  console.log(
    `SELECT * FROM officeLogin WHERE inn = '${login}' AND passwordInn = '${password}';`
  );
  if (login && password) {
    connection.query(
      `SELECT * FROM officeLogin WHERE inn = '${login}' AND passwordInn = '${password}';`,
      (err, data) => {
        console.log(data);
        if (err) {
          response.status(403).json("Что-то пошло не так");
          return;
        }
        if (!data.length) {
          response.status(404).json("Пользователь не найден");
          return;
        }

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.status(200).json(data);
      }
    );
  } else {
    response.send("введите логин и пароль");
    response.end();
  }
});

app.listen(3010, () => {
  console.log("Сервер запущен");
});
