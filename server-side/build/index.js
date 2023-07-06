"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const port = process.env.PORT || 3000;
app.get('/api/register', (req, res) => {
    res.send([1, 2, 3, 4]);
});
app.listen(port, () => { console.log(`Server running on port: ${port}`); });
