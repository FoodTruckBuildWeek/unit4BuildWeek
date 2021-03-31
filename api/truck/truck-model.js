// db = require("../../data/db-config");

// const findById = (truck_id) => {
//   return db("trucks").where({ truck_id }).first();
// };

// function findBy(locationFilter) {
//   /**
//       You will need to join two tables.
//       Resolves to an ARRAY with all users that match the filter condition.
//      */
//   return (
//     db("trucks as t")
//       //.join("diners as d", "", "=", "r.id")not sure
//       .select("d.id", "d.diner_location", "t.id", "t.truck_location")
//       .where(locationFilter)
//   );
// }

// // //get truck current location by id
// // const getLocationById = (truck_id) => {
// //     return db('trucks as t')
// //     .select('t.*')
// // }

// //get filter by cuisine_type
// function findBy(cuisineFilter) {
//   return db("trucks as t").where("t.cuisine_type", cuisineFilter);
// }

// // - filter: cuisine type, radSize,
// module.exports = {
//   findById,
//   findBy,
// };
