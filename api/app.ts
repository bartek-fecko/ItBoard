// tslint:disable: object-literal-sort-keys
import express, { Application, Response } from 'express';
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const app: Application = express();
dotenv.config({ path: './.env' });

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', (req, res: Response) => {
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
