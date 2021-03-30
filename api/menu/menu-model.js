db = require("../../data/db-config");

const findById = (id) => {
  return db("menuitems").where({ id }).first();
};

module.exports = {
  findById,
};
