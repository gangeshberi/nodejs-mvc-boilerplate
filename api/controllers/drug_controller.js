const Drug = require('../models/drug_model');
const logger = require('../../config/winston');

/**
 * Get all drugs.
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Array|Object} - drug array or error response object
 */
async function getDrugs(req, res) {
  try {
    const drugs = await Drug.findAll();
    // render the drug view
    res.render('drug_view.ejs', { drugs });
    logger.info('Retrieved data for all drugs using getDrugs controller function');
  } catch (error) {
    logger.error(`An error occurred in getDrugs controller: ${error.message}`);
    res.status(500).send({
      message: 'Failed to retrieve drugs',
      error: error.message,
    });
  }
}

/**
 * Get a single drug by ID.
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns {Array|Object} - single drug array or error response object
 */
async function getDrug(req, res) {
  try {
    const drugId = Number(req.params.drugId);
    if (Number.isNaN(drugId)) {
      logger.error('Invalid drug ID');
      throw new Error('Invalid drug ID');
    }
    const drug = await Drug.findOne(drugId);
    if (!drug) {
      throw new Error(`Drug with ID ${drugId} not found`);
    }
    res.status(200).json(drug);
    logger.info('Retrieved data for a single drug using getDrug controller function');
  } catch (error) {
    logger.error(`An error occurred in getDrug controller: ${error.message}`);
    res.status(500).send({
      message: 'Failed to retrieve drug',
      error: error.message,
    });
  }
}

module.exports = {
  getDrugs,
  getDrug,
};
