'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "superHeroesDB",
});

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // création de la dB
  connection.query("CREATE DATABASE IF NOT EXISTS superHeroesDB CHARACTER SET 'utf8'", function (err, result) {
    if (err) throw err;
    console.log("database created");
  });

  connection.query("CREATE TABLE IF NOT EXISTS superHeroesDB.users (userID INT NOT NULL UNIQUE AUTO_INCREMENT, username VARCHAR(50) NOT NULL UNIQUE, createdat TIMESTAMP, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, avatarUrl VARCHAR(500), addressID INT NOT NULL, password VARCHAR(40) NOT NULL, birthday DATE)",  function (err, result) {
    if (err) throw err;
    console.log("Table users created");
  });

  connection.query("CREATE TABLE IF NOT EXISTS superHeroesDB.adress(adressID INT NOT NULL UNIQUE AUTO_INCREMENT, name VARCHAR(255), adress VARCHAR(255), city VARCHAR(255), country VARCHAR(255), postalCode INT)", function (err, result) {
    if (err) throw err;
    console.log("Table adress created");
  });
});

module.exports = connection;