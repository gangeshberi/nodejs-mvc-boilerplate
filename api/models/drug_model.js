const knex = require('../../config/database');

function findAll() {
  return knex
    .select()
    .from('drugs');
}

function findOne(drugId) {
  return knex
    .select()
    .from('drugs')
    .where('drug_id', drugId);
}

module.exports = {
  findAll,
  findOne,
};
