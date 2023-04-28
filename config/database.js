const env = process.env.NODE_ENV || 'development';
const knex = require('knex');
const knexfile = require('../knexfile');

const knexSetup = knex(knexfile[env]);

module.exports = knexSetup;
