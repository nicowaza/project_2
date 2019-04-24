import express from 'express';
import { verifyJwt } from './middlewares/jwtAuth';
import connection from './dbconnection';
const mysql = require('mysql');
export const adressRouter = express.Router()


const auth = verifyJwt;

adressRouter.get('/', auth, (req, res) => {
  connection.query('SELECT * FROM adress ', (err, results, fields) => {
    if (err) {
      console.log(err);
      res.send({
        err
      })
    }else {
      console.log(results)
      res.status(200).send({status: true, content: results});
    }
  });
});

adressRouter.post('/', auth, (req, res) => {
  const body = req.body;
  let name = body.name;
  let adress = body.adress;
  let city = body.city;
  let country = body.country;
  let postalCode = body.postalCode;


  let query = `INSERT INTO adress (name, adress, city, country, postalCode) VALUES ('${name}', '${adress}', '${city}', '${country}', '${postalCode}')`;

    connection.query(query, (err, results, fields) => {
      if (err) {
        console.log(err);
        // res.status(400).send({ status: false, message: 'User not created'})
        res.send({
          err
        })
      }else{
        console.log(results);
        res.send({
          "code":200,
          "success":"new adress registered sucessfully"
        });
      }
    })
  })