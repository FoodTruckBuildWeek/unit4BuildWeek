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

const findMenuItems = (id) => {
  return db("trucks_menuitems as t")
  .join("menuitems as m", "m.menuitem_id", 't.menuitem_id')
  .select("t.*", 'm.item_name', "item_description", "item_img", "item_price")
  .where('t.menuitem_id', id)
};

async function insert(truck) {
  const [id] = await db("trucks").insert(truck, "truck_id");

  return findById(id);
}

function update(id, changes) {
  return db("trucks").where({ truck_id: id }).update(changes);
}

function remove(id) {
  return db("trucks").where("truck_id", Number(id)).del();
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
  findMenuItems
};
