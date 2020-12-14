const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// VIEWS ROUTER
const viewsRouter = require('./views/Router');

// API ROUTERS
const apiSchedules = require('./api/schedules/Main');


//CORS ORIGIN MIDELWARE
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept,Access-Control-Request-Method,Authorization,territoken');
	res.header('Access-Control-Request-Methods','GET, POST,OPTIONS,PUT,DELETE');
	res.header('Allow','GET, POST,OPTIONS,PUT,DELETE');
	next();
});

app.use('/', viewsRouter);
app.use('/api/v1', apiSchedules);

module.exports = app;