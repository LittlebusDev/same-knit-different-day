/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  return await knex('knitting').insert([
    {
      id: 1,
      name: 'knitting pattern 1',
      year: 1940,
      image: 'an image goes here',
      hobby: 'knitting',
    },
    {
      id: 2,
      name: 'knitting pattern 2',
      year: 1950,
      image: 'an image goes here',
      hobby: 'knitting',
    },
    {
      id: 3,
      name: 'knitting pattern 3',
      year: 1960,
      image: 'an image goes here',
      hobby: 'knitting',
    },
    {
      id: 4,
      name: 'knitting pattern 4',
      year: 1970,
      image: 'an image goes here',
      hobby: 'knitting',
    },
    {
      id: 5,
      name: 'knitting pattern 5',
      year: 1980,
      image: 'an image goes here',
      hobby: 'knitting',
    },
    {
      id: 6,
      name: 'knitting pattern 6',
      year: 1990,
      image: 'an image goes here',
      hobby: 'knitting',
    },
    {
      id: 7,
      name: 'knitting pattern 7',
      year: 2000,
      image: 'an image goes here',
      hobby: 'knitting',
    },
    {
      id: 8,
      name: 'knitting pattern 8',
      year: 1930,
      image: 'an image goes here',
      hobby: 'knitting',
    },
    {
      id: 9,
      name: 'knitting pattern 9',
      year: 1920,
      image: 'an image goes here',
      hobby: 'knitting',
    },
    {
      id: 10,
      name: 'knitting pattern 10',
      year: 1910,
      image: 'an image goes here',
      hobby: 'knitting',
    },
    {
      id: 11,
      name: 'knitting pattern 11',
      year: 1900,
      image: 'an image goes here',
      hobby: 'knitting',
    },
  ])
}
