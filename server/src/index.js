import express from 'express';
import volleyball from 'volleyball';
import passport from 'passport'
// import {configJWTStrategy} from './api/middlewares/auth';
import 'dotenv/config';
import cors from 'cors';
import { userRouter } from './api/users';
import { loginRouter } from './api/login';
import { adressRouter } from './api/adress';

const app = express();

const port = 5454;

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
app.use('/adress', adressRouter);

app.get('/', (req, res) => {
  console.log('tout est ok')
  res.json('ça marche')
})


app.listen(port, () => console.log(`[Express] is running on ${port}`))

