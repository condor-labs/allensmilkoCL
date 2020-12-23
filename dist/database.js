"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var connectToDb = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var STAGE, database;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            STAGE = process.env.STAGE;
            if (!STAGE) console.error("You dont have any enviroment configured");
            database = process.env["DATABASE_".concat(STAGE.toUpperCase(), "_CONNECTION")];
            _context.next = 6;
            return _mongoose["default"].connect(database, {
              useNewUrlParser: true
            });

          case 6:
            console.log('========> Data base is connected');
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.error('Error to connect to database ===>', _context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function connectToDb() {
    return _ref.apply(this, arguments);
  };
}();

exports.connectToDb = connectToDb;
//# sourceMappingURL=database.js.map