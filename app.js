const express = require('express');

const app = express();
const drugs = require('./api/routes/drug_routes');
const logger = require('./config/winston');

const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/drugs', drugs);

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});
