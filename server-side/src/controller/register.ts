import {NextFunction, Request, Response} from 'express';
import { Connect, Query } from '../helpers/database';

const Joi = require('joi');

const RegisterUser = (req:Request, res:Response, next:NextFunction) =>{
    
    const {error, value} = Validate(req.body)
    if(error) return res.sendStatus(400).send(error.details[0].message);

    const query = `INSERT INTO users (name, phone, gender, password) VALUES ('${req.body.name}', '${req.body.phone}', '${req.body.gender}', '${req.body.password}')`;

    Connect()
    .then(connection=>{
        Query(connection, query)
        .then(results => {  return res.status(200).json({results}); })
        .catch(error => { res.status(500).send({ message:error.message, error }) })
        .finally( () => connection.end() )
    })
    .catch(error => { res.status(500).send({ message:error.message, error }) })
}

function Validate(user:any) {
    const phoneRegex = /^(\+61)[0-9]{9}$/;
    const schema = {
        name: Joi.string().min(3).required(),
        phone: Joi.string().regex(phoneRegex).required(),
        gender: Joi.string().required(),
        password: Joi.string().min(8).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    }
    return Joi.validate(user, schema);
}

export default { RegisterUser }