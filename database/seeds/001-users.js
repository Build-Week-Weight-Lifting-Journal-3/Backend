const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {firstName: 'Joshua', lastName: 'Edgerton', password: bcrypt.hashSync('pass', 10), email: 'Joshuaxedgerton@gmail.com'},
      ]);
    });
};
