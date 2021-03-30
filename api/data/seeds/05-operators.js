
exports.seed = function(knex) {
  return knex('operators').del()
    .then(function () {
      return knex('operators').insert([
        {truck_id: 1},
        {truck_id: 3},
        {truck_id: 2}
      ]);
    });
};
