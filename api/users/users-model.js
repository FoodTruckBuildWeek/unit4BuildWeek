const db = require('../data/db-config');

function find() {
  return db('users')
}

function findBy(filter) {
    return db('users as u')
    .where(filter);
}

function findById(user_id) {
    return db('users as u')
    .join('roles as r', 'r.role_id', '=', 'u.role_id')
    .select('u.user_id', 'u.user_username', 'r.role_name')
    .where('u.user_id', user_id)
    .first();
}
function add(user) {
  return db('users')
    .insert(user, 'user_id')
    .then(([user_id]) => user_id)
}
  
  module.exports = {
    add,
    find,
    findById,
    findBy
  };
  