import {NextFunction, Request, Response} from 'express';
import { Connect, Query } from '../helpers/database';

const RegisterUser = (req:Request, res:Response, next:NextFunction) =>{
    const user = {
        name: req.body.name, 
        phone: req.body.phone,
        gender: req.body.gender, 
        password: req.body.password, 
        confirmPassword: req.body.confirmPassword
    };

    const query = `INSERT INTO users (name, phone, gender, password) VALUES ('${user.name}', '${user.phone}', '${user.gender}', '${user.password}')`;

    Connect()
    .then(connection=>{
        Query(connection, query)
        .then(results => {  return res.status(200).json({results}); })
        .catch(error => { res.status(500).send({ message:error.message, error }) })
        .finally( () => connection.end() )
    })
    .catch(error => { res.status(500).send({ message:error.message, error }) })
}

export default { RegisterUser }