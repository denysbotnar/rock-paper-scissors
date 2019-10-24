
exports.up = (knex) => knex.schema.createTable('games', (table) => {
  table.increments('id');
  table.string('winner');
  table.string('type');
  table.timestamp('created_at').defaultTo(knex.fn.now());
});

exports.down = (knex) => knex.schema.dropTable('games');
