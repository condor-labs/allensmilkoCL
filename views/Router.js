import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
import QuoteService from "../api/quotes/Service.js";

const moduleURL = new URL(import.meta.url);

const __dirname = path.dirname(moduleURL.pathname);

const ViewsRouter = express();

// SETTING VEW ENGINE AND STATIC FOLDERS
const pages = path.join(__dirname, 'pages');
const layouts = path.join(__dirname, 'layouts');
    
nunjucks.configure([pages, layouts], {
      autoescape: true, 
      express: ViewsRouter,
      watch: true
});

ViewsRouter.set('view engine', 'html');
ViewsRouter.set('views', [pages, layouts]);
ViewsRouter.engine('html', nunjucks.render);
ViewsRouter.use(express.static('public'));

ViewsRouter.get("/", async(req, res, next) => {
        // {"docs":[],"totalDocs":25,"offset":0,"limit":1,"totalPages":25,"page":1,"pagingCounter":1,"hasPrevPage":false,"hasNextPage":true,"prevPage":null,"nextPage":2}

    try {
        const { query } = req;
        const data = await QuoteService.getQuotes(query);
        data.title = 'Trainning Condor labs.io';
        console.log(data)
        res.render(`home.html`, data);
    } catch (error) {
        res.status(500).send(error.toJSON());
    }
});

export default ViewsRouter;