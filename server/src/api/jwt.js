import jwt from 'jsonwebtoken';
import "dotenv/config";
import _user from '../../users.json'

const secretKey = process.env.key

export default {

    //Sign Token
    issue(payload, expiresIn){
      return jwt.sign(payload, secretKey, {expiresIn: 10800})
  }
}
