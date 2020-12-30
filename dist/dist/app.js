"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _Router = _interopRequireDefault(require("./views/Router.js"));

var _Main = _interopRequireDefault(require("./api/quotes/Main.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json()); // VIEWS ROUTER
//CORS ORIGIN MIDELWARE

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept,Access-Control-Request-Method,Authorization,territoken');
  res.header('Access-Control-Request-Methods', 'GET, POST,OPTIONS,PUT,DELETE');
  res.header('Allow', 'GET, POST,OPTIONS,PUT,DELETE');
  next();
});
app.use('/', _Router["default"]);
app.use('/api/v1', _Main["default"]);
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map