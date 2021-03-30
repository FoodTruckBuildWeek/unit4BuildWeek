
exports.seed = function(knex) {
  return knex('truck_locations').del()
    .then(function () {
      return knex('truck_locations').insert([
        {truck_id: 1, laditude: '12.66555', longitude: '12.66555'},
        {truck_id: 2, laditude: '11.22244', longitude: '11.22244'},
        {truck_id: 3, laditude: '31.1111', longitude: '01.34562'}
      ]);
    });
};
