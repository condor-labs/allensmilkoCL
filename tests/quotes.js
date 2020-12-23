import { expect } from "chai";
import QuoteService from '../api/quotes/Service.js';
import faker from 'faker';

describe("TEst Quotes", () => {
    it("should create a quote!", async() => {
        const data = {
            clientName: faker.name(),
            email: faker.email(),
            total: faker.commerce.price()
        }
        const newQuote = await QuoteService.createQuote(data)
        console.log(newQuote)
    })
})