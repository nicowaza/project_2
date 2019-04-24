import express from 'express';
// import _users from '../../users.json';
import passport from 'passport'
import jwt from 'jsonwebtoken';
import { verifyJwt } from './middlewares/jwtAuth';
// const db = require ('./dbconnection');
import connection from './dbconnection';
const mysql = require('mysql');
export const userRouter = express.Router()

// const auth =passport.authenticate('jwt', {session:false})

const auth = verifyJwt;

// function userExist(id) {
//   const user = _users.find((user) => user.id == id);

//   return user;
// }

/**
 * req: Object containing all the request information,
 *      such as headers, params, body.
 *
 * res: Object containing all the response methods and information
 */
userRouter.get('/', auth, (req, res) => {
  connection.query('SELECT * FROM users ', (err, results, fields) => {
    if (err) {
      console.log(err);
      // res.status(400).send({ status: false, message: 'User not created'})
      res.send({
        err
      })
    }else {
      console.log(results)
      res.status(200).send({status: true, content: results});
    }
  });
});

userRouter.get('/:id', auth, (req, res) => {
  const id = req.params.id;
  const user = _users.find((user) => user.id == id);

  if (user) res.status(200).send(user);
  else res.status(404).send('User not found');
});

userRouter.post('/', (req, res) => {
  const body = req.body;
  let username = body.username;
  let password = body.password;

  if (!username || !password) {
    res.status(412).send('Username and password are invalid')
  }else{

    let query = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;

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
          "success":"new user registered sucessfully"
        });
      }
    })
  }
})

userRouter.put('/:id', auth, (req, res) => {
  const id = req.params.id;
  const user = userExist(id);

  const updatedFields = ['firstname', 'lastname', 'birthday'];

  if (user) {
    const body = req.body;

    updatedFields.forEach((field) => {
      if (req.body[field]) user[field] = req.body[field];
    });

    res.status(200).send(user);
  } else res.status(404).send('User not found');
});

userRouter.delete('/:id', auth, (req, res) => {
  const id = req.params.id;
  const user = userExist(id);

  if (user) {
    _users = _users.filter((user) => user.id != id);

    res.status(200).send('');
  } else {
    res.status(404).send('User not found');
  }
});
