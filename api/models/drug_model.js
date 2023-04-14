const knex = require('../../config/database');

const findAll = function() {
	return knex
		.select()
		.from('drugs');
};

const findOne = function(drugId) {
	return knex
		.select()
		.from('drugs')
		.where('drug_id', drugId);
};

module.exports = {
	findAll,
	findOne
};
