"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../helpers/database");
const Joi = require('joi');
const RegisterUser = (req, res, next) => {
    const { error, value } = Validate(req.body);
    if (error)
        return res.sendStatus(400).send(error.details[0].message);
    const query = `INSERT INTO users (name, phone, gender, password) VALUES ('${req.body.name}', '${req.body.phone}', '${req.body.gender}', '${req.body.password}')`;
    (0, database_1.Connect)()
        .then(connection => {
        (0, database_1.Query)(connection, query)
            .then(results => { return res.status(200).json({ results }); })
            .catch(error => { return res.status(500).send({ message: error.message, error }); })
            .finally(() => connection.end());
    })
        .catch(error => { return res.status(500).send({ message: error.message, error }); });
};
function Validate(user) {
    const phoneRegex = /^(\+61)[0-9]{9}$/;
    const schema = {
        name: Joi.string().min(3).required(),
        phone: Joi.string().regex(phoneRegex).required(),
        gender: Joi.string().required(),
        password: Joi.string().min(8).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    };
    return Joi.validate(user, schema);
}
exports.default = { RegisterUser };
