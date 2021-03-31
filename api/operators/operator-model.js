const db = require("../data/db-config");

const findById = (operator_id) => {
  return db("operators").where("operator_id", operator_id).first();
};


module.exports = {
  findById
  
};
