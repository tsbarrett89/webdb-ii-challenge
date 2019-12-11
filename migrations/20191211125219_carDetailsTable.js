
exports.up = function(knex) {
  return knex.schema.createTable('car_details', tbl => {
      tbl.increments();
      tbl.string('VIN').notNullable(); // add unique here
      tbl.string('make').notNullable();
      tbl.string('model').notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission_type');
      tbl.string('title_status');


  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car_details')
};
