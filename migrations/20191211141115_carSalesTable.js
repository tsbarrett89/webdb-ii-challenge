
exports.up = function(knex) {
    return knex.schema.createTable('sales_details', tbl => {
        tbl.increments();
        tbl.string('VIN').notNullable();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.integer('mileage').notNullable();
        tbl.string('transmission_type');
        tbl.string('title_status');
        tbl.string('price').notNullable();
        tbl.integer('sale_amount').notNullable();
        tbl.string('sold_by').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales_details')
};
