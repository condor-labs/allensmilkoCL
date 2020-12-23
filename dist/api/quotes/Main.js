"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _Controller = require("./Controller.js");

var _Model = require("./Model.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var QuotesRouter = (0, _express["default"])();
QuotesRouter.get("/quotes", _Controller.GetQuotes);
QuotesRouter.post("/quotes", _Controller.CreateQuote);
QuotesRouter.use('/quotes/graphql', (0, _expressGraphql.graphqlHTTP)({
  graphiql: true,
  schema: _Model.graphqlSchema
}));
var _default = QuotesRouter;
exports["default"] = _default;
//# sourceMappingURL=Main.js.map