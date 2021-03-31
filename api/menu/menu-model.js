const db = require("../data/db-config");

const findByTruckId = (id) => {
  return db("menuitems").where({ truck_id: id }).first();
};

module.exports = {
  findByTruckId,
};
