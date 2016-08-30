'use strict';

export.seed = function(knex) {
  return knex('concerts')
    .del()
    .then(() => {
      return knex('concerts').insert([{
          id: 1,
          name: 'Capitol Hill Block Party 2016'
          price: 49.99
        }, {
          id: 2,
          name: 'Bumbershoot 2016',
          price: 64.99
        }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('concerts_id_seq', (SELECT MAX(id) FROM concerts));"
      );
    });
};
