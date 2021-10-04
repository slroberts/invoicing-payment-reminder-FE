exports.up = (knex) => {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments();
    tbl.string('name', 256).notNullable().unique();
    tbl.string('email', 256).notNullable().index();
    tbl.string('password', 256).notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists();
};
