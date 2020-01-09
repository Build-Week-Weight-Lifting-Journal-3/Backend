
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('journals').del()
    .then(function () {
      // Inserts seed entries
      return knex('journals').insert([
        {userId: 1, date: 'Jan 4th, 2020', name: 'Test'},
        {userId: 2, date: 'Jan 4th, 2020', name: 'Test'},
        {userId: 3, date: 'Jan 4th, 2020', name: 'Test'},
        {userId: 4, date: 'Jan 4th, 2020', name: 'Test'},
        {userId: 5, date: 'Jan 4th, 2020', name: 'Test'},
        {userId: 6, date: 'Jan 4th, 2020', name: 'Test'},
        {userId: 7, date: 'Jan 4th, 2020', name: 'Test'},
        {userId: 8, date: 'Jan 4th, 2020', name: 'Test'},
        {userId: 9, date: 'Jan 4th, 2020', name: 'Test'},
        {userId: 10, date: 'Jan 4th, 2020', name: 'Test'},
      ]);
    });
};
