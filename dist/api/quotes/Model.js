"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphqlSchema = exports.Quote = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

var _graphqlCompose = require("graphql-compose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Schema = _mongoose["default"].Schema,
    Model = _mongoose["default"].Model;
var QuoteSchema = new Schema({
  clientName: String,
  email: String,
  total: Number
});
QuoteSchema.plugin(_mongoosePaginateV["default"]);

var QuoteModel = /*#__PURE__*/function (_Model) {
  _inherits(QuoteModel, _Model);

  var _super = _createSuper(QuoteModel);

  function QuoteModel() {
    _classCallCheck(this, QuoteModel);

    return _super.apply(this, arguments);
  }

  return QuoteModel;
}(Model);

var Quote = _mongoose["default"].model(QuoteModel, QuoteSchema, 'quote');

exports.Quote = Quote;
var customizationOptions = {};
var QuoteTC = (0, _graphqlComposeMongoose.composeMongoose)(Quote, customizationOptions);

_graphqlCompose.schemaComposer.Query.addFields({
  findQuotes: QuoteTC.mongooseResolvers.findMany(),
  paginateQuotes: QuoteTC.mongooseResolvers.pagination(),
  findQuoteById: QuoteTC.mongooseResolvers.findById()
});

_graphqlCompose.schemaComposer.Mutation.addFields({
  quoteCreateOne: QuoteTC.mongooseResolvers.createOne(),
  createMany: QuoteTC.mongooseResolvers.createMany()
});

var graphqlSchema = _graphqlCompose.schemaComposer.buildSchema();

exports.graphqlSchema = graphqlSchema;
//# sourceMappingURL=Model.js.map