const db = require("../data/db-config");

//get for diner
function findById(diner_id) {
  return db("diners").where("diner_id", diner_id).first();
}
//get array of favorite Trucks by id
const findFavoriteTrucks = (diner_id) => {
  //    need to track down fav trucks according to diner_id
  //    go from diners to fav_trucks to trucks; need a join for diners, trucks, and fav_trucks

  return db("trucks as t")
    .join("fav_trucks as f", "f.truck_id", "=", "t.truck_id")
    .join("diners as d", "d.diner_id", "=", "f.diner_id")
    .where("d.diner_id", diner_id);

  // select.*
  // diners d
  // join fav_trucks f on f.diner_id = d.diner_id
  // join trucks t on t.truck_id = f.truck_id
  // where
  // d.diner_id = diner_id
};

// module.exports = {
//   findById,
//   findFavoriteTrucks,
// };
