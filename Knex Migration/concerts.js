'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('concerts', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.decimal('price').notNullable().defaultTo(1.00);
    table.timestamp('started_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('ended_at').notNullable().defaultTo(knex.fn.now());
  });
};


exports.down = function(knex) {
  return knex.schema.dropTable('concerts');
};
