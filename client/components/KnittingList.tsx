import { useQuery } from '@tanstack/react-query'
// import { Link } from 'react-router-dom'
import { fetchAllKnitting } from '../apis/apiClient'
// import type { Pattern } from '../../models/patterns'

export default function KnittingList() {
  const {
    data: knitting,
    error,
    isLoading,
  } = useQuery(['knitting'], fetchAllKnitting)
  console.log(knitting)
  // const queryClient = useQueryClient()

  if (error) {
    return <p>Whoops! Something went wrong!</p>
  }

  if (!knitting || isLoading) {
    return <p>Loading items...</p>
  }

  return (
    <>
      <h2>Knitting</h2>

      {/* <ul>
    {knitting.map(i) => (
      <li key={i.id}>

      </li>
    )}
  </ul> */}
    </>
  )
}
