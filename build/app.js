"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable: object-literal-sort-keys
const express_1 = __importDefault(require("express"));
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express_1.default();
dotenv.config({ path: './.env' });
app.use(cors());
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express_1.default.static(path.join(__dirname, '../client/build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
const port = process.env.PORT;
const server = app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`listening on port ${port}`);
});
server.timeout = 1000 * 15;
if (process.env.NODE_ENV === 'development') {
    server.timeout = 1000 * 20;
}
