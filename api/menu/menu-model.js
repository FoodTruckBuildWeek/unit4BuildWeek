const db = require("../data/db-config");

const findByTruckId = (truck_id) => {
  return db("menuitems").where({ truck_id}).first();
};

module.exports = {
  findByTruckId,
};
