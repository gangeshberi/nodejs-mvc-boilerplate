const csv = require('csvtojson');
const path = require('node:path');

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
      .then(() => console.log('<--- Successfully deleted drug table --->'));
  } catch (error) {
    console.error(`An error occurred while deleting drug table data, ${error}`);
  }

  // Adds new enteries to the drug table
  try {
    // drug JSON data array
    const drugArray = await csv(parserParams).fromFile(drugFile);

    // insert data into drug table
    await knex('drug')
      .insert(drugArray)
      .then(() => console.log('<--- Successfully inserted data into drug table --->'));
  } catch (error) {
    console.error(`An error occurred while inserting data to drug table, ${error}`);
  }
};
