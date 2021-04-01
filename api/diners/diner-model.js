const db = require("../data/db-config");

//get for diner
function findById(diner_id) {
  return db("diners").where("diner_id", diner_id).first();
}
//get array of favorite Trucks by id
const findFavoriteTrucks = (diner_id) => {
  return db("trucks as t")
    .join("diner_favetruck as f", "f.truck_id", "=", "t.truck_id")
    .join("diners as d", "d.diner_id", "=", "f.diner_id")
    .where("d.diner_id", diner_id);
};

module.exports = {
  findById,
  findFavoriteTrucks,
};
