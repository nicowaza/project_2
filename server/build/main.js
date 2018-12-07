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



const loginRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
loginRouter.post('/', (req, res) => {
  const {
    username,
    password
  } = req.body;

  const user = _users_json__WEBPACK_IMPORTED_MODULE_2__.find(user => user.username === req.body.username);

  if (!user) res.status(404).send('User not found');
  if (user.password !== password) return res.status(412).send('Password incorrect');
  const token = _jwt__WEBPACK_IMPORTED_MODULE_1__["default"].issue({
    username
  }, 'secret', {
    expiresIn: 18000
  });
  console.log(token);
  res.json(token);
  res.status(200).send('ok');
});

/***/ }),

/***/ "./src/api/middlewares/auth.js":
/*!*************************************!*\
  !*** ./src/api/middlewares/auth.js ***!
  \*************************************/
/*! exports provided: configJWTStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configJWTStrategy", function() { return configJWTStrategy; });
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _users_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../users.json */ "./users.json");
var _users_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../users.json */ "./users.json", 1);





const key = process.env.key; //A Passport strategy for authenticating with a JSON Web Token.
// This module lets you authenticate endpoints using a JSON web token. It is intended to be     used to secure RESTful endpoints without sessions.
// @https://github.com/themikenicholson/passport-jwt

const configJWTStrategy = () => {
  const opts = {
    jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_1___default.a.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: key
  };
  passport__WEBPACK_IMPORTED_MODULE_0___default.a.use(new passport_jwt__WEBPACK_IMPORTED_MODULE_1___default.a.Strategy(opts, function (payload, done) {
    _users_json__WEBPACK_IMPORTED_MODULE_3__.find({
      username: payload.username
    }, function (err, user) {
      if (err) {
        return done(err);
      }

      if (user) {
        return done(null, user);
      }

      return done(null, false);
    });
  }));
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
/* harmony import */ var _users_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../users.json */ "./users.json");
var _users_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../users.json */ "./users.json", 1);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt */ "./src/api/jwt.js");




const userRouter = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const auth = passport__WEBPACK_IMPORTED_MODULE_2___default.a.authenticate('jwt', {
  session: false
});

function userExist(id) {
  const user = _users_json__WEBPACK_IMPORTED_MODULE_1__.find(user => user.id == id);

  return user;
}
/**
 * req: Object containing all the request information,
 *      such as headers, params, body.
 *
 * res: Object containing all the response methods and information
 */


userRouter.get('/', auth, (req, res) => {
  res.status(200).send(_users_json__WEBPACK_IMPORTED_MODULE_1__);
});
userRouter.get('/:id', auth, (req, res) => {
  const id = req.params.id;

  const user = _users_json__WEBPACK_IMPORTED_MODULE_1__.find(user => user.id == id);

  if (user) res.status(200).send(user);else res.status(404).send('User not found');
});
userRouter.post('/', (req, res) => {
  const body = req.body;

  if (body.username && body.password) {
    const newUser = {
      id: Date.now(),
      username: body.username,
      password: body.password
    };

    _users_json__WEBPACK_IMPORTED_MODULE_1__.push(newUser);

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
    updatedFields.forEach(field => {
      if (req.body[field]) user[field] = req.body[field];
    });
    res.status(200).send(user);
  } else res.status(404).send('User not found');
});
userRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  const user = userExist(id);

  if (user) {
    _users = _users_json__WEBPACK_IMPORTED_MODULE_1__.filter(user => user.id != id);
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
/* harmony import */ var _api_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/middlewares/auth */ "./src/api/middlewares/auth.js");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv/config */ "dotenv/config");
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/users */ "./src/api/users.js");
/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/login */ "./src/api/login.js");








const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = 5432;
app.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());
app.use(volleyball__WEBPACK_IMPORTED_MODULE_1___default.a);
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({
  extended: true
}));
app.use(passport__WEBPACK_IMPORTED_MODULE_2___default.a.initialize());
Object(_api_middlewares_auth__WEBPACK_IMPORTED_MODULE_3__["configJWTStrategy"])();
app.use('/users', _api_users__WEBPACK_IMPORTED_MODULE_6__["userRouter"]);
app.use('/login', _api_login__WEBPACK_IMPORTED_MODULE_7__["loginRouter"]);
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

module.exports = __webpack_require__(/*! /home/simplonco/Bureau/Projets/Alternance/Login_exos/user_login_React/server/src/index.js */"./src/index.js");


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

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

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