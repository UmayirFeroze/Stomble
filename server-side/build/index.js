"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const Joi = require('joi');
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const register_1 = require("./routes/register");
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
app.use(body_parser_1.default.json());
app.use('/api/register', register_1.router);
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server running on port: ${port}`); });
