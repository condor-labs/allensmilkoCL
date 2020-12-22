import { Quote } from './Model.js'
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

export default QuoteService;