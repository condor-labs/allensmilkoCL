import express from 'express';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// VIEWS ROUTER
import ViewsRouter from './views/Router.js';

// API ROUTERS
import QuotesRouter from './api/quotes/Main.js';


//CORS ORIGIN MIDELWARE
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept,Access-Control-Request-Method,Authorization,territoken');
	res.header('Access-Control-Request-Methods','GET, POST,OPTIONS,PUT,DELETE');
	res.header('Allow','GET, POST,OPTIONS,PUT,DELETE');
	next();
});

app.use('/', ViewsRouter);
app.use('/api/v1', QuotesRouter);

export default app;