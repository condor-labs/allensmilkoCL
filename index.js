import dotenv from 'dotenv'
import * as http from 'http';
import app from './app.js';
import { connectToDb } from './database.js';

dotenv.config();

const port = process.env.PORT || 3000;
const server = http.createServer(app);

connectToDb();

server.listen(port, () => {
	console.log("Aplicación inicializada, bienvenido a Trainning con dorlabs!! " + port);
});
	
