import QuoteService from "./Service.js";
import faker from "faker";
import { json } from "body-parser";

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

export const CreateManyQuotes = async (req, res, next) => {
    try {
        const lengthMap = faker.random.number(100);
        const body = [];
        for (let index = 0; index < lengthMap; index++) {
            body.push ({
                clientName: faker.name.firstName(),
                total: faker.commerce.price(),
                email: faker.internet.email()
            });
        }
        
        console.log(body)
        const quoteCreated = await QuoteService.createManyQuotes(body);
        res.status(200).send(quoteCreated);
    } catch (error) {
        console.log(error)
        // throw new error(error)
        res.status(500).send({error: error});
    }
}

export const InsertManyQuotes = async (req, res, next) => {
    try {
        const {body} = req; 
        
        console.log("DATA DESDE ELASTIC");
        console.log(body)
        const quoteCreated = await QuoteService.createManyQuotes(body);
        res.status(200).send(quoteCreated);
    } catch (error) {
        console.log(error)
        // throw new error(error)
        res.status(500).send({error: error});
    }
}