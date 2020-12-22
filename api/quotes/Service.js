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

export default QuoteService;