const express = require('express');
const { getDrugs, getDrug } = require('../controllers/drug_controller');
const paramValidator = require('../middlewares/param_validator');

const router = express.Router();

router.param('drugId', paramValidator);
router.get('/', getDrugs);
router.get('/:drugId', getDrug);

module.exports = router;
