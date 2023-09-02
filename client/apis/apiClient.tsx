import request from 'superagent'

//GET /api/v1/knitting
export async function fetchAllKnitting() {
  const response = await request.get('api/v1/knitting')
  console.log('api', response)
  return response.body
}

//GET /api/v1/knitting/:id
// export async function fetchKnittingById(id: number) {
//   const response = await request.get(`api/v1/knitting/${id}`)
//   return response.body
// }
