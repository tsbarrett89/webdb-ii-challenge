
exports.up = function(knex) {
  return knex.schema.createTable('carDetails', tbl => {
      tbl.increments();
      tbl.string('VIN').notNullable();
      tbl.string('make').notNullable();
      tbl.string('model').notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission_type');
      tbl.string('title_status');
  })
};

exports.down = function(knex) {
  
};
