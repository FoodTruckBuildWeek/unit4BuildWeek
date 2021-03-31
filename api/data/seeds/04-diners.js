
exports.seed = function(knex) {
  return knex('diners').del()
    .then(function () {
      return knex('diners').insert([
        {longitude: '44.88888', latitude: '22.12121', diner_favetruck_id: 3},
        {longitude: '01.44888', latitude: '90.12322', diner_favetruck_id: 2},
         {longitude: '49.00021', latitude: '65.12345', diner_favetruck_id: 1}
      ]);
    });
};
