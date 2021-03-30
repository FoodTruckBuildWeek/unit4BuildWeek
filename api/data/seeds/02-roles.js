
exports.seed = function(knex) {
  return knex('roles').del()
    .then(function () {
      return knex('roles').insert([
        {role_id: 1, role: 'diner'},
        {role_id: 2, role: 'operator'}
      ]);
    });
};
