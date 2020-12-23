"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Model = require("./Model.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var QuoteService = {};

QuoteService.createQuote = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload) {
    var quote, quoteSaved;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            quote = new _Model.Quote(payload);
            _context.next = 4;
            return quote.save();

          case 4:
            quoteSaved = _context.sent;
            console.log(quoteSaved);
            return _context.abrupt("return", quote);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            throw new Error(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

QuoteService.getQuotes = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(query) {
    var offset, limit;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            offset = query.offset ? parseInt(query.offset) : 0;
            limit = query.limit ? parseInt(query.limit) : 10;
            _context2.next = 5;
            return _Model.Quote.paginate({}, {
              offset: offset,
              limit: limit
            });

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            throw new Error(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = QuoteService;
exports["default"] = _default;
//# sourceMappingURL=Service.js.map