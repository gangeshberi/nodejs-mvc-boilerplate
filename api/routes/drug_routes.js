const express = require('express');
const { getDrugs, getDrug } = require('../controllers/drug_controller');

const router = express.Router();

router.param('drugId', (req, res, next, drugId) => {
  if (Number.isInteger(Number(drugId))) {
    next();
  } else {
    res.send(`
            <body style="background-color: black">
                <h3 style="color: red"> Enter a valid id!! </h3>
            </body>
        `);
  }
});

router.get('/', getDrugs);

router.get('/:drugId', getDrug);

module.exports = router;
