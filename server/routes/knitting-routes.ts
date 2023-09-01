import express from 'express'
import * as db from '../db/knitting'

const router = express.Router()

//GET /api/v1/knitting
router.get('/knitting', async (req, res) => {
  try {
    const knitting = await db.getAllKnitting()
    res.json(knitting)
  } catch (error) {
    res.status(500)
  }
})

//GET api/v1/knitting/:id
// router.get('/knitting/:id', (req, res) => {
//   try{
//   const id = Number(req.params.id)
//   const knittingSingle = await.getKnittingById(id)
//   res.json(knittingSingle)}
//   catch(error){res.status(500)}
// })
