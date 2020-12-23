import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

const { Schema, Model } = mongoose;

const QuoteSchema = new Schema({
    clientName: String,
    email: String,
    total: Number
});
  
QuoteSchema.plugin(mongoosePaginate);
  
class QuoteModel extends Model {}

export const Quote = mongoose.model(QuoteModel, QuoteSchema, 'quote');

const customizationOptions = {};
const QuoteTC = composeMongoose(Quote, customizationOptions);

schemaComposer.Query.addFields({
  findQuotes: QuoteTC.mongooseResolvers.findMany(),
  paginateQuotes: QuoteTC.mongooseResolvers.pagination(),
  findQuoteById: QuoteTC.mongooseResolvers.findById(),
});

schemaComposer.Mutation.addFields({
  quoteCreateOne: QuoteTC.mongooseResolvers.createOne(),
  createMany: QuoteTC.mongooseResolvers.createMany(),
});

export const graphqlSchema = schemaComposer.buildSchema();
