const Drug = require('../models/drug_model');
const logger = require('../../config/winston');

const SERVER_ERROR = 'Internal server error';

/**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Array|Object} - drug array or error response object
 */
function getDrugs(req, res) {
  return Drug
    .findAll()
    .then((drugs) => res.status(200).json(drugs))
    .catch((err) => {
      logger.error(`An Error occurred in getDrugs controller, ${err}`);
      res.status(500).send({
        message: SERVER_ERROR,
        error: err,
      });
    });
}

/**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Array|Object} - single drug array or error response object
 */
function getDrug(req, res) {
  const drugId = Number(req.params.drugId);

  return Drug
    .findOne(drugId)
    .then((drug) => res.status(200).json(drug))
    .catch((err) => {
      logger.error(`An Error occurred in getDrug controller, ${err}`);
      res.status(500).send({
        message: SERVER_ERROR,
        error: err,
      });
    });
}

module.exports = {
  getDrugs,
  getDrug,
};
