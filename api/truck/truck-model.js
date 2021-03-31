const db = require("../data/db-config");
const st = db.postgis;

function get() {
  return db("trucks");
}

const findById = (truck_id) => {
  return db("trucks").where({ truck_id }).first();
};

function findBy(filter) {
  return db("trucks").where(filter);
}
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

async function insert(truck) {
  const [id] = await db("trucks").insert(truck, "truck_id");

  return findById(id);
}

function update(id, changes) {
  return db("trucks").where({ truck_id: id }).update(changes);
}

function remove(id) {
  return (
    db("diner_favetruck").where({ truck_id: id }).del &&
    db("trucks").where({ truck_id: id }).del()
  );
}

function findWithinRadSize(lat, lng, radSize) {
  return db("trucks").where(
    st.dwithin(
      st.geography(st.makePoint("latitude", "longitude")),
      st.geography(st.makePoint(lat, lng)),
      radSize
    )
  );
}

module.exports = {
  findById,
  findBy,
  findWithinRadSize,
  insert,
  update,
  remove,
  get,
};
