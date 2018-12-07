import express from 'express'
import _users from '../../users.json'
import passport from 'passport'
import jwt from './jwt';

export const userRouter = express.Router()

const auth =passport.authenticate('jwt', {session:false})

function userExist(id) {
  const user = _users.find((user) => user.id == id);

  return user;
}

/**
 * req: Object containing all the request information,
 *      such as headers, params, body.
 *
 * res: Object containing all the response methods and information
 */
userRouter.get('/', auth, (req, res) => {
  res.status(200).send(_users);
});

userRouter.get('/:id', auth, (req, res) => {
  const id = req.params.id;
  const user = _users.find((user) => user.id == id);

  if (user) res.status(200).send(user);
  else res.status(404).send('User not found');
});

userRouter.post('/', (req, res) => {
  const body = req.body;

  if (body.username && body.password) {
    const newUser = {
      id: Date.now(),
      username: body.username,
      password: body.password
    };

    _users.push(newUser);
    res.status(200).send(newUser);
  } else {
    res.status(412).send('Username and password are required fields.');
  }
});

userRouter.put('/:id', (req, res) => {
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

userRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  const user = userExist(id);

  if (user) {
    _users = _users.filter((user) => user.id != id);

    res.status(200).send('');
  } else {
    res.status(404).send('User not found');
  }
});
