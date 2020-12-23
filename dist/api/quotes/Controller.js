"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateQuote = exports.GetQuotes = void 0;

var _Service = _interopRequireDefault(require("./Service.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var GetQuotes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var query, quotesFinded;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            query = req.query;
            _context.next = 4;
            return _Service["default"].getQuotes(query);

          case 4:
            quotesFinded = _context.sent;
            res.status(200).send(quotesFinded);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(500).send(_context.t0.toJSON());

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function GetQuotes(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetQuotes = GetQuotes;

var CreateQuote = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var body, quoteCreated;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            body = req.body;
            console.log(body);
            _context2.next = 5;
            return _Service["default"].createQuote(body);

          case 5:
            quoteCreated = _context2.sent;
            res.status(200).send(quoteCreated);
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            res.status(500).send(_context2.t0.toJSON());

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function CreateQuote(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.CreateQuote = CreateQuote;
//# sourceMappingURL=Controller.js.map