//import models
import { Pattern } from '../../models/patterns.ts'
import db from './connection.ts'

export async function getAllKnitting(): Promise<Pattern[]> {
  console.log('db')
  const allKnitting = await db('knitting').select('')

  return allKnitting
}

// export async function getKnittingById(id: number) {
//   const knittingById = await db('knitting').where('id', id).first()
//   return knittingById
// }
