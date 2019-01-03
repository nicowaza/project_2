// import Passport from 'passport';
// import PassportJWT from 'passport-jwt';
// import ExtractJwt from 'passport-jwt';
// import 'dotenv/config'
// import _users from '../../../users.json';

// const secret = process.env.key
// //A Passport strategy for authenticating with a JSON Web Token.
// // This module lets you authenticate endpoints using a JSON web token. It is intended to be     used to secure RESTful endpoints without sessions.
// // @https://github.com/themikenicholson/passport-jwt

// export const configJWTStrategy = () => {
//   const opts = {
//     jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: secret,
//   };
//   Passport.use(
//     new PassportJWT.Strategy(opts, function(payload, done) {
//       _users.find({username: payload.username}, function(err, user) {
//         if (err) {
//           return done(err);
//         }
//         if (user) {
//           return done(null, user);
//         }
//         return done(null, false);
//       });
//     })
//   );
// };
