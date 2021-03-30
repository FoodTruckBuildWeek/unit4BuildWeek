
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {user_username: 'aquaman', user_password: 'aquaman', user_email: 'aqua@gmail.com', role_id: 1},
        {user_username: 'wonderwoman', user_password: 'wonderwoman', user_email: 'wonder@gmail.com', role_id: 2},
        {user_username: 'captainamerica', user_password: 'captain', user_email: 'ca@gmail.com', role_id: 1}
      ]);
    });
};
