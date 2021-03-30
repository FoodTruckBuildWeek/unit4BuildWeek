//something wrong with knex file?

const db = require("../data/db-config");

function findById(user_id) {
  return db("users")
    .select("user_id", "username", "password", "role")
    .where("user_id", user_id)
    .first();
}

async function add({ username, password, role }) {
  const [user_id] = await db("users").insert({
    username,
    password,
    role,
  });
  return user_id;
}

module.exports = {
  add,
  findById,
};
