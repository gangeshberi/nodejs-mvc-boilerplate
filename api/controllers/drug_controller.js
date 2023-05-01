const Drug = require('../models/drug_model');
const logger = require('../../config/winston');

function getDrugs(req, res) {
  return Drug
    .findAll()
    .then((drugs) => res.send(drugs))
    .catch((err) => {
      logger.error(`An Error occurred in getDrugs controller, ${err}`);
      res.status(500).send('<h2> Error occurred while generating a response <h2>');
    });
}

function getDrug(req, res) {
  const drugId = Number(req.params.drugId);

  return Drug
    .findOne(drugId)
    .then((drug) => res.send(drug))
    .catch((err) => {
      logger.error(`An Error occurred in getDrug controller, ${err}`);
      res.status(500).send('<h2> Error occurred while generating a response <h2>');
    });
}

module.exports = {
  getDrugs,
  getDrug,
};
