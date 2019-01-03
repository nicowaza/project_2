import _users from '../../../users.json';
// import jwt from './jwt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.key

export const verifyJwt = (req, res, next) => {
  const userToken = req.headers['user-auth-token'];

  jwt.verify(userToken, secret, (error, decoded) => {
    if(error) res.status(403).send('Token is not valid')
    else {res.status(200).send(_users)}
  })
}
