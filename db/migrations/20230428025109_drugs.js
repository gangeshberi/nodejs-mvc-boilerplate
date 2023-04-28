/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function createDrugTable(knex) {
  return knex.schema.hasTable('drug')
    .then((exists) => {
      let query;
      if (!exists) {
        query = knex.schema.createTable('drug', (table) => {
          table
            .increments('id')
            .primary();
          table
            .string('name', 100)
            .unique()
            .notNullable();
        });
      }
      return query;
    })
    .catch((err) => {
      throw err;
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function dropDrugTable(knex) {
  return knex.schema.dropTableIfExists('drug');
};
