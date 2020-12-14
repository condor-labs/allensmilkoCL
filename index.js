'use strict'
const app = require('./app');
const port = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);

server.listen(port, () => {
	console.log("Aplicación inicializada, bienvenido a Trainning con dorlabs!! " + port);
});
	
