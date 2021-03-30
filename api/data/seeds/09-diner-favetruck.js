
exports.seed = function(knex) {
  return knex('diner_favetruck').del()
    .then(function () {
      return knex('diner_favetruck').insert([
        {diner_id: 1, truck_id: 1},
        {diner_id: 2, truck_id: 1},
        {diner_id: 3, truck_id: 3}
      ]);
    });
};
