const express = require('express');

const app = express();
const drugs = require('./api/routes/drug_routes');
const logger = require('./config/winston');

const port = process.env.PORT || 5000;

// serve static files
app.use('/static', express.static('public'));

// get request on the root route (/)
app.get('/', (req, res) => {
  res.send('<h2> nodejs-mvc-boilerplate </h2>');
});

// drug routes
app.use('/drugs', drugs);

app.listen(port, () => {
  logger.info(`Application listening on port ${port}`);
});
