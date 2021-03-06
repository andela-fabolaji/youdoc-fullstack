// Dependencies
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import Router from './routes';

// Global vars
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Route app
Router(app);

export default app;
