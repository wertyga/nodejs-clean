import express from 'express';
import bodyParser from 'body-parser'

const ENVS = require('./envs/envs');
import { api } from './api';
const config = require('./common/config');

import './common/mongoose'

const server = express();

ENVS.setEnvies();

server.use(bodyParser.json());

server.use('/api', api);

server.listen(config.PORT, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${config.PORT}`)
})