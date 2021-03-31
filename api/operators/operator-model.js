db = require("../../data/db-config");

const findById = (operator_id) => {
  return db("operators").where({ operator_id }).first();
};

// //create new truck two examples
// const createTruck = (newTruck) => {
//     return db('trucks').insert(newTruck)
// }
// //create new truck
// function insert(truck) {
//   return db('trucks')
//     .insert(truck, 'id')
//     .then(([id]) => get(id));
// }

async function insert(truck_id) {
  const [id] = await db("trucks").insert(truck_id);

  return findById(truck_id);
}

// //edit truck
// function update(id, changes) {
//   return db('trucks')
//     .where('id', id)
//     .update(changes)
//     .then((count) => (count > 0 ? get(id) : null));//not sure what this is
// }
function update(id, changes) {
  //need to be async?
  return db("trucks").where({ id }).update(changes);
}

function remove(truck_id) {
  return db("trucks").where({ truck_id }).del();
}

module.exports = {
  findById,
  insert,
  update,
  remove,
};
