import { Quote } from './Model.js'
import elasticsearch from 'elasticsearch';

const elasticClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace',
    apiVersion: '7.2', // use the same version of your Elasticsearch instance
  });

  elasticClient.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
  }, function (error) {
    if (error) {
      console.trace('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });
  
const QuoteService = {};

QuoteService.createQuote = async(payload) => {
    try {
        const quote = new Quote(payload);

        const quoteSaved = await quote.save();
        console.log(quoteSaved)
        return quote;
    } catch (error) {
        throw new Error(error);
    }
}

QuoteService.getQuotes = async(query) => {
    try {
        const offset = query.offset? parseInt(query.offset): 0;
        const limit = query.limit? parseInt(query.limit): 10;
        return await Quote.paginate({}, { offset, limit });
    } catch (error) {
        throw new Error(error);
    }
}

QuoteService.createManyQuotes = async(payload) => {
    try {
        return await Quote.insertMany(payload);
    } catch (error) {
        throw new Error(error);
    }
}

QuoteService.ingestManyQuotes = async(payload) => {
    try {
        return await elasticClient.bulk({body: payload})
    } catch (error) {
        throw new Error(error);
    }
}

export default QuoteService;