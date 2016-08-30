'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('attendees', (table) => {
    table.increments();
    table
      .integer('concert_id')
      .notNullable()
      .references('id')
      .inTable('concerts')
      .onDelete('CASCADE')
      .index();
    table.string('name').notNullable().defaultTo('');
    table.integer('age').notNullable().defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('attendees');
};
