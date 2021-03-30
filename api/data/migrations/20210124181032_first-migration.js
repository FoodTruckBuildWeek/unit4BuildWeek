exports.up = async (knex) => {
  await knex.schema
  .createTable("roles", (tbl) => {
    tbl.increments("role_id");
    tbl.string('role').notNullable();
  })
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("user_username", 200).notNullable();
      users.string("user_password", 200).notNullable();
      users.string("user_email", 320).notNullable();
      users.integer("role_id").notNullable().references('role_id').inTable('roles') .onDelete("RESTRICT")
      .onUpdate("RESTRICT");
      users.timestamps(false, true);
    })
    .createTable("trucks", (tbl) => {
      tbl.increments("truck_id");
      tbl.string("truck_img").notNullable();
      tbl.string("cuisine_type", 28).notNullable();
      tbl.time("departure_time").notNullable();
    })
    .createTable("truck_locations", (tbl) => {
      tbl.increments("truck_location_id");
      tbl.string("laditude");
      tbl.string('longitude');
      tbl
        .integer("truck_id")
        .unsigned()
        .notNullable()
        .references("truck_id")
        .inTable("trucks")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("diners", (tbl) => {
      tbl.increments("diner_id");
      tbl.integer("role_id").notNullable();
      //tbl.text("diner_location"); need gps
      tbl
        .integer("fav_truck_id")
        .unsigned()
        .notNullable()
        .references("truck_id")
        .inTable("trucks")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("operators", (tbl) => {
      tbl.increments("operator_id");
      tbl.integer("role_id", 128).notNullable();
    })
    .createTable("menuitems", (tbl) => {
      tbl.increments("menuitem_id");
      tbl.string("item_name", 28).notNullable();
      tbl.text("item_description").notNullable();
      tbl.string("item_img").notNullable();
      tbl.float("item_price").notNullable();
    })
    .createTable("trucks_menuitems", (tbl) => {
      tbl.increments("trucks_menuitems_id");
      tbl
        .integer("truck_id")
        .unsigned()
        .notNullable()
        .references("truck_id")
        .inTable("trucks")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl
        .integer("menuitem_id")
        .unsigned()
        .notNullable()
        .references("menuitem_id")
        .inTable("menuitems")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("operator_trucks", (tbl) => {
      tbl.increments("operator_trucks_id");
      tbl
        .integer("operator_id")
        .unsigned()
        .notNullable()
        .references("operator_id")
        .inTable("operators")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl
        .integer("truck_id")
        .unsigned()
        .notNullable()
        .references("truck_id")
        .inTable("trucks")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("ratings", (tbl) => {
      tbl.increments("rating_id");
      tbl.integer("rating")
      tbl.float("avg_cust_rating").notNullable;
      tbl
        .integer("truck_id")
        .unsigned()
        .notNullable()
        .references("truck_id")
        .inTable("trucks")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl
        .integer("menuitem_id")
        .unsigned()
        .notNullable()
        .references("menuitem_id")
        .inTable("menuitems")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("diner_favetruck", (tbl) => {
      tbl.increments("diner_favetruck_id");
      tbl
        .integer("diner_id")
        .unsigned()
        .notNullable()
        .references("diner_id")
        .inTable("diners")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl
        .integer("truck_id")
        .unsigned()
        .notNullable()
        .references("truck_id")
        .inTable("trucks")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("diner_truck_locations", (tbl) => {
      tbl.increments("diner_truck_location_id");
      tbl
        .integer("truck_location_id")
        .unsigned()
        .notNullable()
        .references("truck_id")
        .inTable("trucks")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl
        .integer("diner_id")
        .unsigned()
        .notNullable()
        .references("diner_id")
        .inTable("diners")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("diner_truck_locations")
  await knex.schema.dropTableIfExists("diner_favtruck")
  await knex.schema.dropTableIfExists("ratings")
  await knex.schema.dropTableIfExists("operator_trucks")
  await knex.schema.dropTableIfExists("trucks_menuitems")
  await knex.schema.dropTableIfExists("menuitems")
  await knex.schema.dropTableIfExists("operators")
  await knex.schema.dropTableIfExists("diners")
  await knex.schema.dropTableIfExists("truck_locations")
  await knex.schema.dropTableIfExists("trucks")
  await knex.schema.dropTableIfExists("users")
  await knex.schema.dropTableIfExists("roles")
} 