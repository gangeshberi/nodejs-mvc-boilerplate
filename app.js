const express = require('express');

const app = express();
const drugs = require('./api/routes/drug_routes');

const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/drugs', drugs);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
