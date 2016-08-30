'use strict';

export.seed = function(knex) {
  return knex('attendees')
    .del()
    .then(() => {
      return knex('attendees').insert([{
          id: 1,
          concert_id: 1,
          name: 'Daniel Bailey'
          age: 52
        }, {
          id: 2,
          concert_id: 1,
          name: 'Heidi McGuire',
          age: 30
        }, {
          id: 3,
          concert_id: 2,
          name: 'Corey Reyes',
          age: 26
        }, {
          id: 4,
          concert_id: 2,
          name: 'Kristi Sheridan',
          age: 45
        }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('attendees_id_seq', (SELECT MAX(id) FROM attendees));"
      );
    });
};
