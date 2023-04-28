const knex = require('../../config/database');

function findAll() {
  return knex
    .select()
    .from('drug');
}

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
