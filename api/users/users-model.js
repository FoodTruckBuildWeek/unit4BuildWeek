
const db = require('../data/db-config');

function find() {
  return db('users')
}

function findBy(filter) {
    return db('users as u')
    // .join('roles as r', 'r.role_id', '=', 'u.role_id')
    // .select('u.user_id', 'u.user_username', 'u.user_password')
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
// async function add({ user_username, user_password, user_email, role_id }) { 
//     let created_user_id
//     await db.transaction(async trx => {
//       let role_id_to_use
//       const [role] = await trx('roles').where('role_id', role_id)
//       if (role) {
//         role_id_to_use = role.role_id
//       } else {
//         const [role_id] = await trx('roles').insert({ role_id: role_id })
//         role_id_to_use = role_id
//       }
//       const [user_id] = await trx('users').insert({ user_username, user_password, user_email, role_id: role_id_to_use })
//       created_user_id = user_id
//     })
//     return findById(created_user_id)
//   }
  
  module.exports = {
    add,
    find,
    findById,
    findBy
  };
  