const db = require("../data/db-config");

function findBy(filter) {
  return db("users")
  .select("user_id", "password", "username")
  .where(filter)
}

function findById(user_id) {
  return db("users")
    .select("user_id", "username", "password", "role")
    .where("user_id", user_id)
    .first();
}

async function add(user) {
  return db('users')
  .insert(user, "user_id")
  .then(u => {
    const [user_id] = u
    return findById(user_id)
  })
}

module.exports = {
  add,
  findById,
  findBy
};
