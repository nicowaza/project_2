import express from 'express';
import volleyball from 'volleyball';
import passport from 'passport'
// import {configJWTStrategy} from './api/middlewares/auth';
import 'dotenv/config';
import cors from 'cors';
import { userRouter } from './api/users';
import { loginRouter } from './api/login';
const app = express();
const db = require('./api/dbconnection');

const port = 5434;

// création de la dB
db.query("CREATE DATABASE IF NOT EXISTS superHeroesDB CHARACTER SET 'utf8'", function (err, result) {
  if (err) throw err;
  console.log("database created");
});

db.query("CREATE TABLE IF NOT EXISTS superHeroesDB.users (userID INT NOT NULL UNIQUE AUTO_INCREMENT, username VARCHAR(255) NOT NULL UNIQUE, createdat DATETIME, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, avatarUrl VARCHAR(500), addressID INT NOT NULL, password VARCHAR(40) NOT NULL, birthday DATE)",  function (err, result) {
  if (err) throw err;
  console.log("Table users created");
});

db.query("CREATE TABLE IF NOT EXISTS superHeroesDB.adress(adressID INT, city VARCHAR(255), country VARCHAR(255), postalCode INT)", function (err, result) {
  if (err) throw err;
  console.log("Table adress created");
});

app.use(cors());
app.use(volleyball);
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));

// app.use(passport.initialize());
// configJWTStrategy();

app.use('/users', userRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
  console.log('tout est ok')
  res.json('ça marche')
})


app.listen(port, () => console.log(`[Express] is running on ${port}`))

