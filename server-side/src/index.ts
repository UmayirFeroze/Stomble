// const Joi = require('joi');
import express, { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import {router as userRouter} from './routes/register';
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use('/api/register', userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`Server running on port: ${port}`); });