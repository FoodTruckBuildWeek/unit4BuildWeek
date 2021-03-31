const db = require("../data/db-config");

const findByTruckId = (truck_id) => {
  return db("menuitems").where({ truck_id}).first();
};


function get() {
  return db('menuitems')
}

const findById = (menuitem_id) => {
  return db("menuitems").where({ menuitem_id }).first();
};

module.exports = {
  findByTruckId, get, findById
};
