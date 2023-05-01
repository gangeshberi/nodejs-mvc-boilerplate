const csv = require('csvtojson');
const path = require('path');
const logger = require('../../config/winston');

const drugFile = path.join(__dirname, '../data/drugs.csv');

const parserParams = {
  delimiter: ',', // optional
  quote: '"', // optional
  ignoreEmpty: true,
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function drugTable(knex) {
  // Deletes ALL existing entries for drug table
  try {
    await knex('drug')
      .del()
      .then(() => logger.info('<--- Successfully deleted drug table --->'));
  } catch (error) {
    logger.error(`An error occurred while deleting drug table data, ${error?.message}`);
  }

  // Adds new enteries to the drug table
  try {
    // drug JSON data array
    const drugArray = await csv(parserParams).fromFile(drugFile);

    // insert data into drug table
    await knex('drug')
      .insert(drugArray)
      .then(() => logger.info('<--- Successfully inserted data into drug table --->'));
  } catch (error) {
    logger.error('An error occurred while inserting data to drug table');
  }
};
