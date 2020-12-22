import express from 'express';
import { graphqlHTTP } from "express-graphql";
import { GetQuotes } from './Controller.js';
import { graphqlSchema } from './Model.js';

const QuotesRouter = express();

QuotesRouter.get("/quotes", GetQuotes);
QuotesRouter.use('/quotes/graphql', graphqlHTTP({
	graphiql: true,
	schema: graphqlSchema
}))
export default QuotesRouter;