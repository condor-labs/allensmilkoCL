import express from 'express';
import { graphqlHTTP } from "express-graphql";
import { GetQuotes, CreateQuote, CreateManyQuotes, InsertManyQuotes } from './Controller.js';
import { graphqlSchema } from './Model.js';

const QuotesRouter = express();

QuotesRouter.get("/quotes", GetQuotes);
QuotesRouter.post("/quotes", CreateQuote);
QuotesRouter.post("/quotes/bulk", CreateManyQuotes);
QuotesRouter.post("/quotes/insert-from-elastic", InsertManyQuotes);
QuotesRouter.use('/quotes/graphql', graphqlHTTP({
	graphiql: true,
	schema: graphqlSchema
}))
export default QuotesRouter;