const express = require('express');
const pino = require('pino');

const app = express();

const PORT = 3001;

const fileTransport = pino.transport({
  target: 'pino/file',
  options: { destination: `${__dirname}/app.log` },
});

const logger = pino(
  {},
  fileTransport
);

app.listen(PORT, () => {
  logger.info('listening on port', PORT);

  setInterval(() => {
    logger.info('tick')
  }, 1000)
  
})