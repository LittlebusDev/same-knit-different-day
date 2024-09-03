import express from 'express'
import * as db from '../db/knitting'

const router = express.Router()

//GET /api/v1/knitting
router.get('/', async (req, res) => {
  console.log('server')
  try {
    const knitting = await db.getAllKnitting()
    res.json(knitting)
  } catch (error) {
    res.status(500)
  }
})

//GET api/v1/knitting/:id
router.get('/knitting/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const knittingSingle = await db.getKnittingById(id)
    res.json(knittingSingle)
  } catch (error) {
    res.status(500)
  }
})

export default router
