export async function seed(knex) {
  await knex('knitting').del()
}
