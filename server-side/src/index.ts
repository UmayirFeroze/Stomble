import bodyParser from 'body-parser';
import express, {Request, Response} from 'express';
const Joi = require('joi');
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/api/register', (req:Request,res:Response)=>{
    // validation schema

    const user = {
        name: req.body.name, 
        phone: req.body.phone,
        gender: req.body.gender, 
        password: req.body.password, 
        confirmPassword: req.body.confirmPassword
    };

    res.send([1,2,3,4]);
})

app.listen(port, ()=>{console.log(`Server running on port: ${port}`)});