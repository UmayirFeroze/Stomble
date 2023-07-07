"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../helpers/database");
const RegisterUser = (req, res, next) => {
    const user = {
        name: req.body.name,
        phone: req.body.phone,
        gender: req.body.gender,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    };
    const query = `INSERT INTO users (name, phone, gender, password) VALUES ('${user.name}', '${user.phone}', '${user.gender}', '${user.password}')`;
    (0, database_1.Connect)()
        .then(connection => {
        (0, database_1.Query)(connection, query)
            .then(results => { return res.status(200).json({ results }); })
            .catch(error => { res.status(500).send({ message: error.message, error }); })
            .finally(() => connection.end());
    })
        .catch(error => { res.status(500).send({ message: error.message, error }); });
};
exports.default = { RegisterUser };
