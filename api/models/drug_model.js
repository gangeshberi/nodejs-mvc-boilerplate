const knex = require('../../config/database');

/**
 * knex query to get list of all the drugs
 * @returns {function} - knex query
 */
function findAll() {
  return knex
    .select()
    .from('drug');
}

/**
 * knex query to get the drug detail based on the drug id
 * @param {int} drugId - id of the drug
 * @returns {function} - knex query
 */
function findOne(drugId) {
  return knex
    .select()
    .from('drug')
    .where('id', drugId);
}

module.exports = {
  findAll,
  findOne,
};
