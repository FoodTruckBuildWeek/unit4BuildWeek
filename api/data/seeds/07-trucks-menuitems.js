
exports.seed = function(knex) {
  return knex('trucks_menuitems').del()
    .then(function () {
      return knex('trucks_menuitems').insert([
        {truck_id: 1, menuitem_id: 3},
        {truck_id: 2, menuitem_id: 2},
        {truck_id: 3, menuitem_id: 1}
      ]);
    });
};
