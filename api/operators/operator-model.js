const db = require("../data/db-config");

const findById = (operator_id) => {
  return db("operators").where("operator_id", operator_id).first();
};

const findOwnedTrucks = (operator_id) => {
  return db("trucks as t")
    .join("operators as o", "t.truck_id", "=", "o.truck_id")
    .where("o.diner_id", operator_id);
};


module.exports = {
  findById, findOwnedTrucks
  
};
