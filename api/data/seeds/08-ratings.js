
exports.seed = function(knex) {
  return knex('ratings').del()
    .then(function () {
      return knex('ratings').insert([
        {rating: 5, truck_id: 3, menuitem_id: 1},
        {rating: 4, truck_id: 2, menuitem_id: 2},
        {rating: 5, truck_id: 1, menuitem_id: 3},
      ]);
    });
};
