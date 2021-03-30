
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {username: 'aquaman', password: 'aquaman', email: 'aqua@gmail.com', role: "diner"},
        {username: 'wonderwoman', password: 'wonderwoman', email: 'wonder@gmail.com', role: "operator"},
        {username: 'captainamerica', password: 'captain', email: 'ca@gmail.com', role: "diner"}
      ]);
    });
};
