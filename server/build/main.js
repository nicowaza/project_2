require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/adress.js":
/*!***************************!*\
  !*** ./src/api/adress.js ***!
  \***************************/
/*! exports provided: adressRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adressRouter", function() { return adressRouter; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares_jwtAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares/jwtAuth */ "./src/api/middlewares/jwtAuth.js");
/* harmony import */ var _dbconnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dbconnection */ "./src/api/dbconnection.js");
/* harmony import */ var _dbconnection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dbconnection__WEBPACK_IMPORTED_MODULE_2__);




const mysql = __webpack_require__(/*! mysql */ "mysql");

const adressRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const auth = _middlewares_jwtAuth__WEBPACK_IMPORTED_MODULE_1__["verifyJwt"];
adressRouter.get('/', auth, (req, res) => {
  _dbconnection__WEBPACK_IMPORTED_MODULE_2___default.a.query('SELECT * FROM adress ', (err, results, fields) => {
    if (err) {
      console.log(err);
      res.send({
        err
      });
    } else {
      console.log(results);
      res.status(200).send({
        status: true,
        content: results
      });
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
  _dbconnection__WEBPACK_IMPORTED_MODULE_2___default.a.query(query, (err, results, fields) => {
    if (err) {
      console.log(err); // res.status(400).send({ status: false, message: 'User not created'})

      res.send({
        err
      });
    } else {
      console.log(results);
      res.send({
        "code": 200,
        "success": "new adress registered sucessfully"
      });
    }
  });
});

/***/ }),

/***/ "./src/api/dbconnection.js":
/*!*********************************!*\
  !*** ./src/api/dbconnection.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

'user strict';

var mysql = __webpack_require__(/*! mysql */ "mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "superHeroesDB"
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!"); // création de la dB

  connection.query("CREATE DATABASE IF NOT EXISTS superHeroesDB CHARACTER SET 'utf8'", function (err, result) {
    if (err) throw err;
    console.log("database created");
  });
  connection.query("CREATE TABLE IF NOT EXISTS superHeroesDB.users (userID INT NOT NULL UNIQUE AUTO_INCREMENT, username VARCHAR(50) NOT NULL UNIQUE, createdat TIMESTAMP, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, avatarUrl VARCHAR(500), addressID INT NOT NULL, password VARCHAR(40) NOT NULL, birthday DATE)", function (err, result) {
    if (err) throw err;
    console.log("Table users created");
  });
  connection.query("CREATE TABLE IF NOT EXISTS superHeroesDB.adress(adressID INT NOT NULL UNIQUE AUTO_INCREMENT, name VARCHAR(255), adress VARCHAR(255), city VARCHAR(255), country VARCHAR(255), postalCode INT)", function (err, result) {
    if (err) throw err;
    console.log("Table adress created");
  });
});
module.exports = connection;

/***/ }),

/***/ "./src/api/jwt.js":
/*!************************!*\
  !*** ./src/api/jwt.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users.json */ "./users.json");
var _users_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../users.json */ "./users.json", 1);



const secretKey = process.env.key;
/* harmony default export */ __webpack_exports__["default"] = ({
  //Sign Token
  issue(payload, expiresIn) {
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, secretKey, {
      expiresIn: 10800
    });
  }

});

/***/ }),

/***/ "./src/api/login.js":
/*!**************************!*\
  !*** ./src/api/login.js ***!
  \**************************/
/*! exports provided: loginRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRouter", function() { return loginRouter; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt */ "./src/api/jwt.js");
/* harmony import */ var _users_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users.json */ "./users.json");
var _users_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../users.json */ "./users.json", 1);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dbconnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dbconnection */ "./src/api/dbconnection.js");
/* harmony import */ var _dbconnection__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dbconnection__WEBPACK_IMPORTED_MODULE_4__);





const secret = process.env.key;
const loginRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
loginRouter.post('/', (req, res) => {
  const {
    password,
    username
  } = req.body; // const user = _users.find((user) => user.username === req.body.username);

  let query = `SELECT * FROM users WHERE username = '${username}'`;
  _dbconnection__WEBPACK_IMPORTED_MODULE_4___default.a.query(query, (err, results) => {
    if (!results) res.status(404).send('User not found');
    if (results[0].password !== password) return res.status(404).send('Password incorrect');
    const token = _jwt__WEBPACK_IMPORTED_MODULE_1__["default"].issue({
      username
    }, secret, {
      expiresIn: 18000
    });
    console.log(token);
    res.json({
      'token': token
    });
  });
});

/***/ }),

/***/ "./src/api/middlewares/jwtAuth.js":
/*!****************************************!*\
  !*** ./src/api/middlewares/jwtAuth.js ***!
  \****************************************/
/*! exports provided: verifyJwt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyJwt", function() { return verifyJwt; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);
// import _users from '../../../users.json';
// import jwt from './jwt';


const secret = process.env.key;
const verifyJwt = (req, res, next) => {
  const userToken = req.headers['token'];
  jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(userToken, secret, (error, decoded) => {
    if (error) res.status(403).send('Token is not valid');else {
      res.status(200);
      next();
    }
  });
};

/***/ }),

/***/ "./src/api/users.js":
/*!**************************!*\
  !*** ./src/api/users.js ***!
  \**************************/
/*! exports provided: userRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRouter", function() { return userRouter; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _middlewares_jwtAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares/jwtAuth */ "./src/api/middlewares/jwtAuth.js");
/* harmony import */ var _dbconnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dbconnection */ "./src/api/dbconnection.js");
/* harmony import */ var _dbconnection__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dbconnection__WEBPACK_IMPORTED_MODULE_4__);
 // import _users from '../../users.json';



 // const db = require ('./dbconnection');



const mysql = __webpack_require__(/*! mysql */ "mysql");

const userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router(); // const auth =passport.authenticate('jwt', {session:false})

const auth = _middlewares_jwtAuth__WEBPACK_IMPORTED_MODULE_3__["verifyJwt"]; // function userExist(id) {
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
  _dbconnection__WEBPACK_IMPORTED_MODULE_4___default.a.query('SELECT * FROM users ', (err, results, fields) => {
    if (err) {
      console.log(err); // res.status(400).send({ status: false, message: 'User not created'})

      res.send({
        err
      });
    } else {
      console.log(results);
      res.status(200).send({
        status: true,
        content: results
      });
    }
  });
});
userRouter.get('/:id', auth, (req, res) => {
  const id = req.params.id;

  const user = _users.find(user => user.id == id);

  if (user) res.status(200).send(user);else res.status(404).send('User not found');
});
userRouter.post('/', (req, res) => {
  const body = req.body;
  let username = body.username;
  let password = body.password;

  if (!username || !password) {
    res.status(412).send('Username and password are invalid');
  } else {
    let query = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;
    _dbconnection__WEBPACK_IMPORTED_MODULE_4___default.a.query(query, (err, results, fields) => {
      if (err) {
        console.log(err); // res.status(400).send({ status: false, message: 'User not created'})

        res.send({
          err
        });
      } else {
        console.log(results);
        res.send({
          "code": 200,
          "success": "new user registered sucessfully"
        });
      }
    });
  }
});
userRouter.put('/:id', auth, (req, res) => {
  const id = req.params.id;
  const user = userExist(id);
  const updatedFields = ['firstname', 'lastname', 'birthday'];

  if (user) {
    const body = req.body;
    updatedFields.forEach(field => {
      if (req.body[field]) user[field] = req.body[field];
    });
    res.status(200).send(user);
  } else res.status(404).send('User not found');
});
userRouter.delete('/:id', auth, (req, res) => {
  const id = req.params.id;
  const user = userExist(id);

  if (user) {
    _users = _users.filter(user => user.id != id);
    res.status(200).send('');
  } else {
    res.status(404).send('User not found');
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var volleyball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! volleyball */ "volleyball");
/* harmony import */ var volleyball__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(volleyball__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/users */ "./src/api/users.js");
/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/login */ "./src/api/login.js");
/* harmony import */ var _api_adress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/adress */ "./src/api/adress.js");


 // import {configJWTStrategy} from './api/middlewares/auth';






const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = 5454;
app.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());
app.use(volleyball__WEBPACK_IMPORTED_MODULE_1___default.a);
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({
  extended: true
})); // app.use(passport.initialize());
// configJWTStrategy();

app.use('/users', _api_users__WEBPACK_IMPORTED_MODULE_5__["userRouter"]);
app.use('/login', _api_login__WEBPACK_IMPORTED_MODULE_6__["loginRouter"]);
app.use('/adress', _api_adress__WEBPACK_IMPORTED_MODULE_7__["adressRouter"]);
app.get('/', (req, res) => {
  console.log('tout est ok');
  res.json('ça marche');
});
app.listen(port, () => console.log(`[Express] is running on ${port}`));

/***/ }),

/***/ "./users.json":
/*!********************!*\
  !*** ./users.json ***!
  \********************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"id":1001,"username":"bruce.wayne@wayne-entreprise.com","createdAt":"2018-01-12T23:00:00.000Z","firstname":"Bruce","lastname":"Wayne","password":"batman","avatarUrl":"https://images.forbes.com/media/lists/fictional/2011/bruce-wayne_197x282.jpg","address":{"city":"Gotham"}},{"id":1002,"username":"c.k@daily-planet.com","createdAt":"2018-30-11T23:00:00.000Z","firstname":"Clark","lastname":"Kent","password":"superman","avatarUrl":"https://resize-parismatch.ladmedia.fr/r/,600,forcey/img/var/news/storage/images/paris-match/culture/medias/l-evolution-physique-des-stars-de-lois-et-clark-les-nouvelles-aventures-de-superman-905795/dean-cain-clark-kent-superman/9605673-1-fre-FR/Dean-Cain-Clark-Kent-Superman.jpg","address":{"city":"Metropolis"}},{"id":1003,"username":"barry.allen@starlabs.com","createdAt":"2018-29-11T23:00:00.000Z","firstname":"Barry","lastname":"Allen","password":"flash","avatarUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBwA2efztaIA7oJsn1f9Nswj2QuHTs7feck9Jpd-d6uJ9W5yYdw","address":{"city":"CentralCity"}}];

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tech/workspace/cproh/user_login_exo/server/src/index.js */"./src/index.js");


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "volleyball":
/*!*****************************!*\
  !*** external "volleyball" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ })

/******/ });
//# sourceMappingURL=main.map