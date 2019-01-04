import express from 'express'
import jwt from './jwt';
import _users from '../../users.json';
import 'dotenv/config';

const secret = process.env.key;

export const loginRouter = express.Router();


loginRouter.post('/', (req, res) => {

  const { username, password } = req.body

  const user = _users.find((user) => user.username === req.body.username);

  if(!user) res.status(404).send('User not found')
  if(user.password !== password) return res.status(412).send('Password incorrect')

  const token = jwt.issue({
    username
  }, secret, {expiresIn: 18000})
  console.log(token)
  res.json(token)

  res.status(200).send('ok')
})



