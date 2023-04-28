const env = process.env.NODE_ENV || 'development';
const knex = require('knex');
const knexfile = require('../knexfile');

knex(knexfile[env]);

module.exports = knex;
