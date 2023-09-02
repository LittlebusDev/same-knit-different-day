// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
export function up(knex) {
  return knex.schema.createTable('knitting', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('year')
    table.text('image')
    table.string('hobby')
  })
}

// /**
// //  * @param { import("knex").Knex } knex
// //  * @returns { Promise<void> }
//  */
export function down(knex) {
  return knex.schema.dropTableIfExists('knitting')
}
