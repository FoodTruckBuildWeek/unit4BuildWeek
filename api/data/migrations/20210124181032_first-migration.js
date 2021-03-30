exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable();
      users.string("password", 200).notNullable();
      users.string("email", 320).notNullable();
      users.string("role", 28).notNullable();
      users.timestamps(false, true);
    })
    .createTable("trucks", (trucks) => {
      trucks.increments("truck_id");
      trucks.string("truck_img").notNullable();
      trucks.string("cuisine_type", 28).notNullable();
      trucks.time("departure_time").notNullable();
      trucks.string('longitude').notNullable()
      trucks.string('laditude').notNullable()
    })
    .createTable("diners", (tbl) => {
      tbl.increments("diner_id");
      tbl.string('longitude')
      tbl.string('laditude')
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
      tbl
        .integer("truck_id")
        .unsigned()
        .notNullable()
        .references("truck_id")
        .inTable("trucks")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
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
    .createTable("ratings", (tbl) => {
      tbl.increments("rating_id");
      tbl.integer("rating");
      tbl
        .integer("truck_id")
        .unsigned()
        .references("truck_id")
        .inTable("trucks")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      tbl
        .integer("menuitem_id")
        .unsigned()
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
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("diner_favetruck");
  await knex.schema.dropTableIfExists("ratings");
  await knex.schema.dropTableIfExists("trucks_menuitems");
  await knex.schema.dropTableIfExists("menuitems");
  await knex.schema.dropTableIfExists("operators");
  await knex.schema.dropTableIfExists("diners");
  await knex.schema.dropTableIfExists("trucks");
  await knex.schema.dropTableIfExists("users");
};
