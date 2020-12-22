import QuoteService from "./Service.js";

export const GetQuotes = async (req, res, next) => {
    try {
        const { query } = req;
        const quotesFinded = await QuoteService.getQuotes(query);
        res.status(200).send(quotesFinded);
    } catch (error) {
        res.status(500).send(error.toJSON());
    }
}

export const CreateQuote = async (req, res, next) => {
    try {
        const { body } = req;
        console.log(body)
        const quoteCreated = await QuoteService.createQuote(body);
        res.status(200).send(quoteCreated);
    } catch (error) {
        res.status(500).send(error.toJSON());
    }
}